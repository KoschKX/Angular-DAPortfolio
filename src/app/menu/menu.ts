import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  template: `
    <section id="menu">
      <div class="title">
        <h1 class="fontRaleway">OUR EMPANADAS</h1>
      </div>
      <div class="section_bg page_bg"></div>
      <ul>
        <li>
          <img class="plate" src="./assets/img/empanadas_cuban.png" alt="" srcset="">
          <div class="description">
            <h2>Cuban</h2>
            <ul>
              <li class="item"><div>Chicken</div><div class="price">$5.00</div></li>
              <li class="item"><div>Beef</div><div class="price">$6.50</div></li>
              <li class="item"><div>Guava & Cheese</div><div class="price">$4.25</div></li>
            </ul>
          </div>
        </li>
        <li>
          <img class="plate" src="./assets/img/empanadas_colombian.png" alt="" srcset="">
          <div class="description">
            <h2>Colombian</h2>
            <ul>
              <li class="item"><div>Potato</div><div class="price">$4.00</div></li>
              <li class="item"><div>Cheese</div><div class="price">$5.50</div></li>
              <li class="item"><div>Beef</div><div class="price">$6.00</div></li>
              <li class="item"><div>Pork</div><div class="price">$7.00</div></li>
            </ul>
          </div>    
        </li>
        <li>
          <img class="plate" src="./assets/img/empanadas_dominican.png" alt="" srcset="">
          <div class="description">
            <h2>Dominican</h2>
            <ul>
              <li class="item"><div>Yuca</div><div class="price">$6.75</div></li>
            </ul>
          </div>
        </li>
      </ul>
      <div class="title">
        <h1 class="fontRaleway">OUR DRINKS</h1>
      </div>
      <div class="section_bg page_bg"></div>
      <ul>
        <li>
          <img class="plate" src="./assets/img/drinks_cortadito.png" alt="" srcset="">
          <div class="description">
            <h2>Cortadito</h2>
            <ul>
              <li class="item"><div>Small</div><div class="price">$4.00</div></li>
            </ul>
          </div>
        </li>
        <li>
          <img class="plate" src="./assets/img/drinks_cafeconleche.png" alt="" srcset="">
          <div class="description">
            <h2>Cafe con Leche</h2>
            <ul>
              <li class="item"><div>Small</div><div class="price">$4.00</div></li>
              <li class="item"><div>Medium</div><div class="price">$5.00</div></li>
            </ul>
          </div>
        </li>
        <li>
          <img class="plate" src="./assets/img/drinks_cafecortado.png" alt="" srcset="">
          <div class="description">
            <h2>Cafe Cortado</h2>
            <ul>
              <li class="item"><div>Small</div><div class="price">$4.00</div></li>
              <li class="item"><div>Medium</div><div class="price">$5.00</div></li>
            </ul>
          </div>
        </li>
        <li>
          <img class="plate" src="./assets/img/drinks_horchata.png" alt="" srcset="">
          <div class="description">
            <h2>Horchata</h2>
            <ul>
              <li class="item"><div>Small</div><div class="price">$3.00</div></li>
              <li class="item"><div>Medium</div><div class="price">$4.00</div></li>
            </ul>
          </div>
        </li>
      </ul>
      <div class="title">
        <h1 class="fontRaleway">Our Desserts</h1>
      </div>
      <div class="section_bg page_bg"></div>
      <ul>
        <li>
          <img class="plate" src="./assets/img/dessert_flandecoco.png" alt="" srcset="">
          <div class="description">
            <h2>Flan</h2>
            <ul>
              <li class="item"><div>Regular</div><div class="price">$3.00</div></li>
              <li class="item"><div>de Coco</div><div class="price">$3.25</div></li>
            </ul>
          </div>
        </li>
        <li>
          <img class="plate" src="./assets/img/dessert_tresleches.png" alt="" srcset="">
          <div class="description">
            <h2>Tres Leches</h2>
            <ul>
              <li class="item"><div>Tres Leches</div><div class="price">$6.25</div></li>
              <li class="item"><div>Cuatro leches</div><div class="price">$6.50</div></li>
            </ul>
          </div>
        </li>
      </ul>
      <div class="section_bg"></div>
    </section>
  `,
   styleUrl: './menu.component.scss' 
})
export class MenuComponent {}
