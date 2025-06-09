import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
    skills: [string, string][] = [
        ['HTML', './assets/img/skill_html.svg'],
        ['CSS', './assets/img/skill_css.svg'],
        ['TypeScript', './assets/img/skill_ts.svg'],
        ['JavaScript', './assets/img/skill_js.svg'],
        ['Angular', './assets/img/skill_angular.svg'],
        ['Firebase', './assets/img/skill_firebase.svg'],
        ['Git', './assets/img/skill_git.svg'],
        ['Material', './assets/img/skill_material.svg'],
        ['Rest', './assets/img/skill_rest.svg'],
        ['Scrum', './assets/img/skill_scrum.svg']
    ];
}