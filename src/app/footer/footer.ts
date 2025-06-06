import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <section id="footer">
      <div class="left">
        <div class="brand">
          <a href="./">
            <img src="" alt="" srcset=""> 
            <span class="site_title">CAFE EMPANADA</span>
          </a>
        </div>
      </div>
      <div class="right">
        <div class="imprint">
          <a href="imprint">IMPRINT</a>
        </div>
      </div>
    </section>
  `,
   styleUrl: './footer.component.scss'
})
export class FooterComponent {}