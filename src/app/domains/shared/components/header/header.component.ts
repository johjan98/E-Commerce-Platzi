import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  @Input({required: true}) cart: Product[] = [];
  total = signal(0);

  ngOnChange(changes: SimpleChanges){
    const cart = changes['cart'];
    if(cart){
      this.total.set(this.totalCalculate())
    }
  }

  toogleSideMenu(){
    this.hideSideMenu.update(prevstate => !prevstate);
  }

  totalCalculate(){
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}
