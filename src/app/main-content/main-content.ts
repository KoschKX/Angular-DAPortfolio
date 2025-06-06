import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeroComponent } from '../hero/hero'
import { FooterComponent } from "../footer/footer";
import { AboutMeComponent } from '../aboutMe/aboutMe';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ReferencesComponent } from '../references/references.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HeroComponent, AboutMeComponent, FooterComponent, SkillsComponent, PortfolioComponent, ReferencesComponent, ContactComponent],
  templateUrl: './main-content.component.html',
  styleUrl: '../app.component.scss'
})
export class MainContentComponent {
  title = 'Cafe Empanada';
}
