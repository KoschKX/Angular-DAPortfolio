import { Component, HostListener, AfterViewInit, Renderer2, Inject, ViewChild, ElementRef, NgZone } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('navRef') navRef!: ElementRef<HTMLElement>;
  
  /** HANDLE INVERTED COLORS */
  handleInvertedColors() {
    const invertElements = Array.from(document.querySelectorAll('.invert')) as HTMLElement[];
    const firstSectionTheme = this.anchors.length > 0 ? this.anchors[0].getAttribute('theme') || 'light' : 'light';
    invertElements.forEach(el => {
      el.classList.remove('light');
      el.classList.remove('dark');
      const elRect = el.getBoundingClientRect();
      const elCenter = elRect.top + elRect.height / 2;
      let themed = false;
      for (const section of this.anchors) {
        const sectionRect = section.getBoundingClientRect();
        if (elCenter >= sectionRect.top && elCenter <= sectionRect.bottom) {
          const theme = section.getAttribute('theme') || firstSectionTheme;
          el.classList.add(theme);
          themed = true;
          break;
        }
      }
      if (!themed) { el.classList.add(firstSectionTheme); }
    });
  }
  
  currentLang = 'en';

  links: [string, string][] = [
    [ 'NAV.ABOUT', '#hero' ],
    [ 'NAV.SKILLS', '#skills' ],
    [ 'NAV.PORTFOLIO', '#portfolio' ],
    [ 'NAV.REFERENCES', '#references' ],
    [ 'NAV.CONTACT', '#contact' ]
  ]


  constructor(
    private renderer: Renderer2, 
    @Inject(DOCUMENT) private document: Document, 
    private ngZone: NgZone,
    private translate: TranslateService
  ) {}

  dropMenuActive: boolean = false;
  activeSection: string | null = null;
  anchors: HTMLElement[] = [];
  dots: string[] = [];
  private lastWheelTime = 0;
  theme: string = "light";
  top: number = 0;

  /** HANDLE MOUSE WHEEL */
  private wheelHandler = (event: WheelEvent) => {
    if (!this.anchors || this.anchors.length === 0) {
      return;
    }
    // Debounce
    const now = Date.now();
    if (now - this.lastWheelTime < 100) {
      return;
    }
    this.lastWheelTime = now;

    // If activeSection is null, default to first section
    let currentIndex = this.anchors.findIndex(a => a.id === this.activeSection);
    if (currentIndex === -1) {
      currentIndex = 0;
    }
    let targetIndex = currentIndex;
    if (event.deltaY > 0) {
      // Scroll down: next section
      targetIndex = Math.min(currentIndex + 1, this.anchors.length - 1);
    } else if (event.deltaY < 0) {
      // Scroll up: previous section
      targetIndex = Math.max(currentIndex - 1, 0);
    }
    if (targetIndex !== currentIndex) {
      const targetId = this.anchors[targetIndex].id;
      this.scrollToElement(targetId, true);
      event.preventDefault();
    }
  };

  ngAfterViewInit(): void {
    this.anchors = Array.from(document.querySelectorAll('section')).filter(section => section.id !== 'navbar') as HTMLElement[];
    setTimeout(() => {
      this.addDots();
      this.checkScroll();
      requestAnimationFrame(() => {
        this.handleInvertedColors();
      });
    });
    document.addEventListener('wheel', this.wheelHandler, { passive: false });
  }
  ngOnDestroy(): void {
    document.removeEventListener('wheel', this.wheelHandler);
  }

  /** TOGGLE THE DROP DOWN MENU */
  toggleDropMenu() {
    this.dropMenuActive = !this.dropMenuActive;
  }

  /** CHECK IF USER HAS SCROLLED */
  @HostListener('window:scroll', [])
  onScroll() {
    this.checkScroll();
  }

  checkScroll() {

    this.activeSection = this.findActiveSection();

    this.stickNavBarToSection();
    
    this.handleInvertedColors();
  }

  /** FIND THE ACTIVE SECTION */
  findActiveSection() {
    let closestId: string = "";
    let minDistance = Number.POSITIVE_INFINITY;
    let activeSection: string = "";
    this.anchors.forEach(anchor => {
      const rect = anchor.getBoundingClientRect();
      const distance = Math.abs(rect.top);
      if (rect.top - 1 <= 0 && distance < minDistance) {  minDistance = distance; closestId = anchor.id; }
    });
    activeSection = closestId;
    if (!activeSection || activeSection == "navbar") { activeSection = "hero"; }
    this.renderer.setAttribute(document.body, 'data-active-section', activeSection);
    return activeSection;
  }

  /** STICK NAV BAR TO SECTION TOP */
  stickNavBarToSection(){
    const sect = document.getElementById(this.activeSection || 'hero');
    if (sect && this.navRef?.nativeElement && this.navRef.nativeElement.classList.contains('stick_to_section')) {
      this.top = sect.offsetTop;
      this.renderer.setStyle(this.navRef.nativeElement, 'top', this.top + 'px');
    }
  }

  /** HANDLE WINDOW RESIZING */
  @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
    //if(document.body.classList.contains('fixed') && this.activeSection){
      this.scrollToElement(this.activeSection || 'hero');
    //}
  }

  /** FORCE SCROLL TO ELEMENT */
  scrollToElement(id: string, smooth: boolean = false) {
    const el = document.getElementById(id);
    if (el) {
      if(smooth){
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }else{
        el.scrollIntoView({ block: 'start' });
      }
    }
  }

  /** ADD THE DOTS TO THE SIDE MENU */
  addDots() {
    this.anchors.forEach(anchor => {
      const id = anchor.getAttribute('id');
      if (id && id !== 'navbar') {
        this.addDot('#' + id);
      }
    });
  }
  addDot(link: string) {
    this.dots.push(link);
  }

  /** SWITCH LANGUAGES */
  switchLang() {
    this.currentLang = this.currentLang === 'en' ? 'de' : 'en';
    this.translate.use(this.currentLang);
  }
}