import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { DocumentsComponent } from './documents/documents.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        
    },
    {
        path: 'inventory',
        component: InventoryComponent,
    },
    {
        path: 'documents',
        component: DocumentsComponent
    }
];
