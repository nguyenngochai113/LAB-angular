import { Component, OnInit } from '@angular/core';
import { products } from "../guitar"
import {Location} from '@angular/common'; 
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-detail8',
  templateUrl: './detail8.component.html',
  styleUrls: ['./detail8.component.css']
})
export class Detail8Component implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location,
    private cartService: CartService) { }
  products
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = parseInt(params.get('id'))
      console.log(id)
      if (!id) {
        this.location.replaceState("/home8/detail8/1")
        id = 1
      }

      this.products = products.filter(product => {
        return product.id === id
      })
      


    })
    
  }
  addToCart(products){
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(products);

}
}
