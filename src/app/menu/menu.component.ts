import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true, // if you are using standalone components
  imports: [],
  template: `
    <div class="menu" 
    [style.width]="menuWidth"    
    (mouseenter)="onMouseEnter()"
    (mouseleave)="onMouseLeave()"
    >
      <img [style.display]="isImageVisible ? 'block' : 'none'" [src]="imgSource" />
      <i [style.display]="isImageVisible ? 'none' : 'block'"  class="pi pi-bars"></i>
      <div class="menu-items">
        <div [style.justifyContent] = "isImageVisible ? 'flex-start' : 'center'" [style.paddingLeft] = "isImageVisible ? '15px' : '0'" class ="menu-item">
          <i class="pi pi-home" style="font-size: 1.2rem"></i>
          <span [style.display]="isImageVisible ? 'block' : 'none'" [style.marginLeft] class="menu-item-text">Home</span>
        </div>
        <div [style.justifyContent] = "isImageVisible ? 'flex-start' : 'center'" [style.paddingLeft] = "isImageVisible ? '15px' : '0'" class ="menu-item">
          <i class="pi pi-warehouse" style="font-size: 1.2rem"></i>
          <span [style.display]="isImageVisible ? 'block' : 'none'" [style.marginLeft] class="menu-item-text">Fixed Assets</span>
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
