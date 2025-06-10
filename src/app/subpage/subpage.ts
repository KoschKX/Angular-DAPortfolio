import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, ActivatedRoute } from '@angular/router';

import { NavbarComponent } from "../navbar/navbar.component";
import { ImprintComponent } from "../imprint/imprint.component";
import { PrivacyComponent } from "../privacy/privacy.component";
import { FooterComponent } from "../footer/footer";

@Component({
  selector: 'app-subpage',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, ImprintComponent, PrivacyComponent, FooterComponent],
  templateUrl: './subpage.component.html',
  styleUrl: './supbage.component.scss'
})
export class SubPageComponent {
  slug: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug') || '';
      console.log('Slug is:', this.slug);
    });
  }
}