import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav style="background-color: #333; padding: 1rem; display: flex; justify-content: space-around;">
      <a routerLink="/" style="color: #fff; text-decoration: none; font-size: 1.2rem;">Home</a>
      <a routerLink="/api-data" style="color: #fff; text-decoration: none; font-size: 1.2rem;">API Data</a>
      <a routerLink="/form" style="color: #fff; text-decoration: none; font-size: 1.2rem;">Form</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterModule]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
