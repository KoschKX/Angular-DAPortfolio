import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landingPage/landingPage'
import { HowToOrderComponent } from "./how-to-order/how-to-order";
import { MenuComponent } from "./menu/menu";
import { FooterComponent } from "./footer/footer";
import { SubPageComponent } from "./subpage/subpage";
import { MainContentComponent } from "./main-content/main-content";
import { ImprintContentComponent } from "./imprint-content/imprint-content";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, LandingPageComponent, HowToOrderComponent, MenuComponent, MainContentComponent, ImprintContentComponent, FooterComponent, SubPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Cafe Empanada';
}

/*
document.addEventListener('DOMContentLoaded', function () {
  const stitles = document.querySelectorAll('.site_title');
  stitles.forEach(function (elm) {
    if (elm instanceof HTMLElement) {
      elm.innerText = document.title;
    }
  });
});
*/