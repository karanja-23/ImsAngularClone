import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
@Component({
  selector: 'app-home',
  imports: [TableComponent],
  template: `
    <div>
      <app-table>
      
      
      </app-table>
    </div>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
