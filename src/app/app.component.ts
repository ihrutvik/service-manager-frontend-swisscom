import { Component } from '@angular/core';
import { ItemListComponent } from './components/item-list/item-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ItemListComponent, HttpClientModule],
  template: `<app-item-list></app-item-list>`,
})
export class AppComponent {}
