import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
    references = [
      'REFERENCES.KENKLEIN',
      'REFERENCES.PAULHOLCOMB',
      'REFERENCES.ALICIAMENDA',
      'REFERENCES.STEVENMILLER',
      'REFERENCES.KYEPARK'
  ];
}