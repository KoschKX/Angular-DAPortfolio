import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home">
      <div class="title">
        <h1 class="site_title fontRealMiami">CAFE EMPANADA</h1>
        <h2 class="fontRaleway">CAFE & EMPANADA BAR</h2>
      </div>
      <div></div>
    </section>
  `,
   styleUrl: './landingPage.component.scss'
})
export class LandingPageComponent {}
