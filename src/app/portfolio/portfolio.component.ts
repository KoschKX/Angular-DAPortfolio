import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  projects: [string, string, string, string, string, string, string][] = [
    ['PROJECTS.JOIN.TITLE', './assets/img/screenshot_projectA.png', './assets/img/icon_projectA.svg', 'PROJECTS.JOIN.TAGS', 'PROJECTS.JOIN.DESC', "", ""],
    ['PROJECTS.DABUBBLE.TITLE', './assets/img/screenshot_projectB.png', './assets/img/icon_projectB.svg', 'PROJECTS.DABUBBLE.TAGS', 'PROJECTS.DABUBBLE.DESC', "", "https://garyangelonejr.me/projects/crabtropics"],
    ['PROJECTS.CRABTROPICS.TITLE', './assets/img/screenshot_projectC.jpg', './assets/img/icon_projectC.svg', 'PROJECTS.CRABTROPICS.TAGS', 'PROJECTS.CRABTROPICS.DESC', "https://garyangelonejr.me/projects/crabtropics/", "https://github.com/KoschKX/CrabTropics"],
    ['PROJECTS.COVENULM.TITLE', './assets/img/screenshot_projectD.jpg', './assets/img/icon_projectC.svg', 'PROJECTS.COVENULM.TAGS', 'PROJECTS.COVENULM.DESC', "https://garyangelonejr.me/projects/coven/", ""],
    ['PROJECTS.CHRONOGLOBE.TITLE', './assets/img/screenshot_projectE.jpg', './assets/img/icon_projectE.svg', 'PROJECTS.CHRONOGLOBE.TAGS', 'PROJECTS.CHRONOGLOBE.DESC', "http://garyangelonejr.me/projects/history/", ""],
    ['PROJECTS.WOOIMPORTEXPORT.TITLE', './assets/img/screenshot_projectF.jpg', './assets/img/icon_projectF.svg', 'PROJECTS.WOOIMPORTEXPORT.TAGS', 'PROJECTS.WOOIMPORTEXPORT.DESC', "https://garyangelonejr.me/woocommerce-custom-import-export/", ""],
    ['PROJECTS.OKINAWARUSH.TITLE', './assets/img/screenshot_projectG.jpg', './assets/img/icon_projectF.svg', 'PROJECTS.OKINAWARUSH.TAGS', 'PROJECTS.OKINAWARUSH.DESC', "https://garyangelonejr.me/okinawa-rush/", ""],
  ];

  currentProject: number = 0;

  nextProject() {
    this.currentProject = (this.currentProject + 1) % this.projects.length;
  }

  prevProject() {
    this.currentProject = (this.currentProject - 1 + this.projects.length) % this.projects.length;
  }
  
}
