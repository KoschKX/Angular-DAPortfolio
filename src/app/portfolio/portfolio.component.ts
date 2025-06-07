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

  projects: [string, string, string, string, string][] = [
    ['PROJECTS.JOIN.TITLE', './assets/img/screenshot_projectA.png', './assets/img/icon_projectA.svg', 'PROJECTS.JOIN.TAGS', 'PROJECTS.JOIN.DESC'],
    ['PROJECTS.DABUBBLE.TITLE', './assets/img/screenshot_projectB.png', './assets/img/icon_projectB.svg', 'PROJECTS.DABUBBLE.TAGS', 'PROJECTS.DABUBBLE.DESC'],
    ['PROJECTS.SHARKIE.TITLE', './assets/img/screenshot_projectC.png', './assets/img/icon_projectC.svg', 'PROJECTS.SHARKIE.TAGS', 'PROJECTS.SHARKIE.DESC']
  ];

  currentProject: number = 0;

  nextProject() {
    this.currentProject = (this.currentProject + 1) % this.projects.length;
  }

  prevProject() {
    this.currentProject = (this.currentProject - 1 + this.projects.length) % this.projects.length;
  }
  
}
