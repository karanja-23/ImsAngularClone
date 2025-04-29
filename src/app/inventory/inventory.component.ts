import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
@Component({
  selector: 'app-inventory',
  imports: [TableComponent],
  template: `
    <div>
    
      <app-table></app-table>
    </div>
  `,
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

}
