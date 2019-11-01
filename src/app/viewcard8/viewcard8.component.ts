import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-viewcard8',
  templateUrl: './viewcard8.component.html',
  styleUrls: ['./viewcard8.component.css']
})
export class Viewcard8Component implements OnInit {
  items;
  S;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.items = this .cartService.getItems();
  }
  // Total() {
  //   let total = 0;
  //   for (let item of this.items) {
  //     if(item.checked)
  //     total += item.quantity * item.price;    }
  //   return total;
  // }
}
