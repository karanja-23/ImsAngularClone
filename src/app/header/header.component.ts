import { Component,Input } from '@angular/core';
import { GreetingService } from '../greeting.service';
@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div class="header" >
      <h4>Inventory</h4>
      <div class="greeting">
      <h4> {{greeting}} </h4>
      
      <i class="pi pi-bell"></i>
      </div>
    
    </div>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 greeting:string = '';
  constructor(public greetingService: GreetingService) { }
 
  ngOnInit() {
    this.greeting = this.greetingService.getGreeting();
  }

}
