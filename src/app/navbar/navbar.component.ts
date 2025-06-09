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
  theme: string = "light";
  top: number = 0;

  @ViewChild('navRef') navRef!: ElementRef<HTMLElement>;

  /** INITIALIZE BY ADDING THE DOTS AND CHECK THE SCROLLING FOR THE FIRST TIME */  
  ngAfterViewInit(): void {
    this.anchors = Array.from(document.querySelectorAll('section')).filter(section => section.id !== 'navbar') as HTMLElement[];
    setTimeout(() => {
      this.addDots();
      this.checkScroll();
      requestAnimationFrame(() => {
        this.handleInvertedColors();
      });
    });
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
    if(document.body.classList.contains('fixed') && this.activeSection){
      this.scrollToElement(this.activeSection);
    }
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