import { Component, EventEmitter,Output } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-menu',
  standalone: true, 
  imports: [RouterModule],
  template: `
    <div class="menu" 
    [style.width]="menuWidth"    
    (mouseenter)="onMouseEnter()"
    (mouseleave)="onMouseLeave()"
    >
      <img [style.display]="isImageVisible ? 'block' : 'none'" [src]="imgSource" />
      <i [style.display]="isImageVisible ? 'none' : 'block'"  class="pi pi-bars"></i>
      <div class="menu-items">
        <div [style.justifyContent]="isImageVisible ? 'flex-start' : 'center'" 
        [style.paddingLeft] = "isImageVisible ? '15px' : '0'" class ="menu-item" 
        [routerLink]="'/'" 
        [routerLinkActiveOptions]="{exact: true}"
        routerLinkActive="active"
        
        >
          <i class="pi pi-home" style="font-size: 1.0rem"></i>
          <span [style.display]="isImageVisible ? 'block' : 'none'" [style.marginLeft] class="menu-item-text">Home</span>
        </div>
        <div [style.justifyContent] = "isImageVisible ? 'flex-start' : 'center'" [style.paddingLeft] = "isImageVisible ? '15px' : '0'" class ="menu-item" [routerLink]="'/documents'" routerLinkActive="active">
          <i class="pi pi-file" style="font-size: 1.0rem"></i>
          <span [style.display]="isImageVisible ? 'block' : 'none'" [style.marginLeft] class="menu-item-text">Documents</span>
        </div>
        <div [style.justifyContent] = "isImageVisible ? 'flex-start' : 'center'" [style.paddingLeft] = "isImageVisible ? '15px' : '0'" class ="menu-item" [routerLink]="'/inventory'" routerLinkActive="active">
          <i class="pi pi-barcode" style="font-size: 1.0rem"></i>
          <span [style.display]="isImageVisible ? 'block' : 'none'" [style.marginLeft] class="menu-item-text">Inventory</span>
        </div>
    
      </div>
      <div class="profile">
          <div [style.justifyContent] = "isImageVisible ? 'flex-start' : 'center'" [style.paddingLeft] = "isImageVisible ? '25px' : '0'" class ="menu-item">
          <i class="pi pi-user" style="font-size: 1.0rem"></i>
          <span [style.display]="isImageVisible ? 'block' : 'none'" [style.marginLeft] class="menu-item-text">Profile</span>
        </div>
        <div [style.justifyContent] = "isImageVisible ? 'flex-start' : 'center'" [style.paddingLeft] = "isImageVisible ? '25px' : '0'" class ="menu-item">
          <i class="pi pi-sign-out" style="font-size: 1.0rem"></i>
          <span [style.display]="isImageVisible ? 'block' : 'none'" [style.marginLeft] class="menu-item-text">Logout</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['menu.component.css']
})
export class MenuComponent {
  menuWidth = '60px';
  isImageVisible = false;
  imgSource = 'assets/menuLogo.png';

  
  onMouseEnter() {
    this.menuWidth = '200px';
    this.isImageVisible = true;
   

  }
 
  onMouseLeave() {
    this.menuWidth = '60px';
    this.isImageVisible = false;
   
  }
 }
