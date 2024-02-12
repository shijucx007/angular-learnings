import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
  <header class="brand-name">
  <img src="brand-logo" src="/assets/logo.svg" 
  alt="logo" aria-hidden="true" />

  </header>

  <section class="content">
  <app-home></app-home>
  </section>
  </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, HomeComponent]
})
export class AppComponent {
  title = 'homes';
}
