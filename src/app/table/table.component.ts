import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { AssetsService } from '../assets.service';
import { ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-table',
  imports: [TableModule, CommonModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div >
    <div class="actions">
    <div class="add-button">
      <i class="pi pi-plus" style="font-size: 1.0rem"></i>
      Add new
    </div>
    <div class="search">
      <form>
        <input type="search" placeholder="Search">
      </form>
      <i class="pi pi-search" style="font-size: 0.9rem"></i>
    
    </div>
    
    </div>
    
  <p-table
    [value]="assets"
    [paginator]="true"
    [rows]="10"
    [tableStyle]="{'width':'fit content', 'min-width': '50rem', 'border-radius': '10px', 'padding': '5px', 'minHeight': '500px', 'border': '1px solid lightgray', 'background-color': 'white', 'box-sizing': 'border-box'}"
    [rowsPerPageOptions]="[10, 15,20]"
    tableStyleClass="custom-table-style"
   
  >
    <ng-template pTemplate="header">
      <tr style="background-color:white;color:black;opacity:0.9">
        <th pSortableColumn="serial_number" style="width:10%;background-color:white;color:black">
          Serial Number
          <p-sortIcon field="serial_number" style="font-size: 2px;"/>
        </th>
        <th pSortableColumn="serial_number" style="width:20%;background-color:white;color:black">
          Purchase date
          <p-sortIcon field="serial_number" style="font-size: 6px;"/>
        </th>
        <th pSortableColumn="serial_number" style="width:15%;background-color:white;color:black">
          Asset Name
          <p-sortIcon field="serial_number" />
        </th>
        <th pSortableColumn="serial_number" style="width:10%;background-color:white;color:black">
          Status
          <p-sortIcon field="serial_number" />
        </th>
        <th pSortableColumn="serial_number" style="width:15%;background-color:white;color:black">
          Current Location
          <p-sortIcon field="serial_number" />
        </th>
        <th style="width:5%;background-color:white;color:black"></th>
      </tr>
    </ng-template>

    <ng-template pTemplate="body" let-asset>
      <tr style="background-color:white;color:black;padding:10px;opacity:0.9">
        <td>{{ asset.serial_number }}</td>
        <td>{{ asset.purchase_date | date:'yyyy-MM-dd HH:mm' }}</td>
        <td>{{ asset.name }}</td>
        <td>{{ asset.status }}</td>
        <td>{{ asset.space.name }}</td>
       <td> <i class="pi pi-ellipsis-v" style="font-size: 1.0rem"></i></td>
        
      </tr>
    </ng-template>
  </p-table>
</div>

  `,
  styleUrl: './table.component.css'
})
export class TableComponent {
  assets: any[] = [];
  constructor(private assetsService: AssetsService) {
    this.assetsService.getAssets().then((data) => {
      this.assets = data
    
    })
  }
   

}
