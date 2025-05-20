import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { LandingPageComponent } from '../landingPage/landingPage'
import { HowToOrderComponent } from "../how-to-order/how-to-order";
import { MenuComponent } from "../menu/menu";
import { FooterComponent } from "../footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, LandingPageComponent, HowToOrderComponent, MenuComponent, FooterComponent],
  templateUrl: './main-content.component.html',
  styleUrl: '../app.component.scss'
})
export class MainContentComponent {
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