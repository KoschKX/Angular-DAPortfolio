import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ActivatedRoute } from '@angular/router';

import { NavbarComponent } from "../navbar/navbar.component";
import { ImprintContentComponent } from "../imprint-content/imprint-content";
import { FooterComponent } from "../footer/footer";

@Component({
  selector: 'app-subpage',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, ImprintContentComponent, FooterComponent],
  templateUrl: './subpage.component.html',
  styleUrl: './supbage.component.scss'
})
export class SubPageComponent {
  slug: string = '';

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
    console.log('Slug is:', this.slug);
  }
}