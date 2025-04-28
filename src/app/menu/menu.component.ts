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
        <div [style.justifyContent]="isImageVisible ? 'flex-start' : 'center'" [style.paddingLeft] = "isImageVisible ? '15px' : '0'" class ="menu-item" [routerLink]="'/'" routerLinkActive="active">
          <i class="pi pi-home" style="font-size: 1.0rem"></i>
          <span [style.display]="isImageVisible ? 'block' : 'none'" [style.marginLeft] class="menu-item-text">Home</span>
        </div>
        <div [style.justifyContent] = "isImageVisible ? 'flex-start' : 'center'" [style.paddingLeft] = "isImageVisible ? '15px' : '0'" class ="menu-item">
          <i class="pi pi-warehouse" style="font-size: 1.0rem"></i>
          <span [style.display]="isImageVisible ? 'block' : 'none'" [style.marginLeft] class="menu-item-text">Fixed Assets</span>
        </div>
        <div [style.justifyContent] = "isImageVisible ? 'flex-start' : 'center'" [style.paddingLeft] = "isImageVisible ? '15px' : '0'" class ="menu-item">
          <i class="pi pi-shopping-cart" style="font-size: 1.0rem"></i>
          <span [style.display]="isImageVisible ? 'block' : 'none'" [style.marginLeft] class="menu-item-text">Orders</span>
        </div>
        <div [style.justifyContent] = "isImageVisible ? 'flex-start' : 'center'" [style.paddingLeft] = "isImageVisible ? '15px' : '0'" class ="menu-item">
          <i class="pi pi-shop" style="font-size: 1.0rem"></i>
          <span [style.display]="isImageVisible ? 'block' : 'none'" [style.marginLeft] class="menu-item-text">Vendors</span>
        </div>
        
        <div [style.justifyContent] = "isImageVisible ? 'flex-start' : 'center'" [style.paddingLeft] = "isImageVisible ? '15px' : '0'" class ="menu-item">
          <i class="pi pi-book" style="font-size: 1.0rem"></i>
          <span [style.display]="isImageVisible ? 'block' : 'none'" [style.marginLeft] class="menu-item-text">Requests</span>
        </div>
        <div [style.justifyContent] = "isImageVisible ? 'flex-start' : 'center'" [style.paddingLeft] = "isImageVisible ? '15px' : '0'" class ="menu-item">
          <i class="pi pi-clipboard" style="font-size: 1.0rem"></i>
          <span [style.display]="isImageVisible ? 'block' : 'none'" [style.marginLeft] class="menu-item-text">Returns</span>
        </div>
        <div [style.justifyContent] = "isImageVisible ? 'flex-start' : 'center'" [style.paddingLeft] = "isImageVisible ? '15px' : '0'" class ="menu-item">
          <i class="pi pi-building" style="font-size: 1.0rem"></i>
          <span [style.display]="isImageVisible ? 'block' : 'none'" [style.marginLeft] class="menu-item-text">Spaces</span>
        </div>
        <div [style.justifyContent] = "isImageVisible ? 'flex-start' : 'center'" [style.paddingLeft] = "isImageVisible ? '15px' : '0'" class ="menu-item">
          <i class="pi pi-users" style="font-size: 1.0rem"></i>
          <span [style.display]="isImageVisible ? 'block' : 'none'" [style.marginLeft] class="menu-item-text">Users</span>
        </div>
        <div [style.justifyContent] = "isImageVisible ? 'flex-start' : 'center'" [style.paddingLeft] = "isImageVisible ? '15px' : '0'" class ="menu-item">
          <i class="pi pi-lock" style="font-size: 1.0rem"></i>
          <span [style.display]="isImageVisible ? 'block' : 'none'" [style.marginLeft] class="menu-item-text">Permissions</span>
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
