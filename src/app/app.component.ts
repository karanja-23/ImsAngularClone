import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MenuComponent],
  template: `<div>
    <app-menu></app-menu>
  
    <router-outlet></router-outlet>
    </div>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sibasi';
}
