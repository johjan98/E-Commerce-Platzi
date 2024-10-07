import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/components/models/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ CommonModule,  ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);

  constructor(){
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Product 1',
        price: 2.15,
        image: 'https://picsum.photos/640/640?r=23',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=24',
        createdAt: new Date().toISOString()
      }
    ];
    this.products.set(initProducts);
  }

  fromChild(event: string){
    console.log('This is the father');
    console.log(event);
  }
}
