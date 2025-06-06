import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer";
import { SubPageComponent } from "./subpage/subpage";
import { ImprintContentComponent } from "./imprint-content/imprint-content";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ImprintContentComponent, FooterComponent, SubPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { 
  title = 'Portfolio';
}
