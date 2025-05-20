import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-how-to-order',
  standalone: true,
  template: `
    <section id="how_to_order">
      <div class="title">
        <h1 class="fontRaleway">HOW TO ORDER</h1>
      </div>
      <ul>
        <li>
          <img src="./assets/img/empanada.svg" alt="" srcset="">
          <span>Choose your Empanada</span>
        </li>
        <li>
          <img src="./assets/img/coffee.svg" alt="" srcset="">
          <span>Pick your drink</span>
        </li>
        <li>
          <img src="./assets/img/hibiskus.svg" alt="" srcset="">
          <span>Have a seat</span>
        </li>
      </ul>
    </section>
  `,
   styleUrl: './how-to-order.component.scss'
})
export class HowToOrderComponent {}
