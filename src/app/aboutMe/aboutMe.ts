import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-aboutMe',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './aboutMe.component.html',
  styleUrl: './aboutMe.component.scss'
})
export class AboutMeComponent {}