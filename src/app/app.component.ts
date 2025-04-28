import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MenuComponent,HeaderComponent],
  template: `<div class="main">
    <app-menu></app-menu>
    <app-header></app-header>
  
    <div class="content">
      <router-outlet></router-outlet>
    </div>
    </div>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sibasi';

}
