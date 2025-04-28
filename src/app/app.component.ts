import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MenuComponent,HeaderComponent],
  template: `<div>
    <app-menu></app-menu>
    <app-header></app-header>
  
    <router-outlet></router-outlet>
    </div>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sibasi';

}
