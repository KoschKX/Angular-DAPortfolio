import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  projects: [string, string, string, string, string][] = [
    ['Join', './assets/img/screenshot_projectA.png', './assets/img/icon_projectA.svg', 'HTML | CSS | Firebase | Angular | TypeScript', 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. '],
    ['DABubble', './assets/img/screenshot_projectB.png', './assets/img/icon_projectB.svg', 'JavaScript | HTML | CSS', 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.'],
    ['Sharkie', './assets/img/screenshot_projectC.png', './assets/img/icon_projectC.svg', 'JavaScript | HTML | CSS', 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale. ']
  ];

  currentProject: number = 0;

  nextProject() {
    this.currentProject = (this.currentProject + 1) % this.projects.length;
  }

  prevProject() {
    this.currentProject = (this.currentProject - 1 + this.projects.length) % this.projects.length;
  }
  
}
