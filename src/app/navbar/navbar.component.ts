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
    this.anchors = Array.from(document.querySelectorAll('section'));
    setTimeout(() => {
      this.addDots(); 
      this.checkScroll();
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
    let closestId: string | null = null;
    let minDistance = Number.POSITIVE_INFINITY;

    this.anchors.forEach(anchor => {
      const rect = anchor.getBoundingClientRect();
      const distance = Math.abs(rect.top);
      if (rect.top - 1 <= 0 && distance < minDistance) {
        minDistance = distance;
        closestId = anchor.id;
      }
    });
    this.activeSection = closestId;
    if (!this.activeSection || this.activeSection == "navbar") {
      this.activeSection = "hero";
    }
    const sect = document.querySelector('#' + this.activeSection) as HTMLElement;
    if (sect) {
      this.top = sect.offsetTop;
      const navbar = document.querySelector('#navbar nav') as HTMLElement;
      if (navbar) {
        if (document.body.classList.contains('fixed')) {
          this.renderer.setStyle(this.navRef.nativeElement, 'top', this.top + 'px');
        } else {
          this.renderer.setStyle(this.navRef.nativeElement, 'top', 0 + 'px');
        }
      }
    }
    
    this.renderer.setAttribute(document.body, 'data-active-section', this.activeSection);
    
    /** HANDLE INVERTED COLORS */
    const sectRect = sect?.getBoundingClientRect();
    const halfway = sectRect ? sectRect.top + sectRect.height / 2 : 0;
    const invertElements = Array.from(document.querySelectorAll('.invert')) as HTMLElement[];
    invertElements.forEach(el => {
      el.classList.remove('light', 'dark');
      const elRect = el.getBoundingClientRect();
      const elCenter = elRect.top + elRect.height / 2;

      let themed = false;

      this.anchors.forEach(section => {
        const sectionRect = section.getBoundingClientRect();
        if (elCenter >= sectionRect.top && elCenter <= sectionRect.bottom) {
          const theme = section.getAttribute('theme') || 'light';
          el.classList.add(theme); 
          themed = true;
        }
      });
    });
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
