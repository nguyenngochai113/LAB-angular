import { Component, OnInit } from '@angular/core';
import { products } from "../guitar"
import { ActivatedRoute } from '@angular/router'; 
import {Location} from '@angular/common'; 
@Component({
  selector: 'app-detail8',
  templateUrl: './detail8.component.html',
  styleUrls: ['./detail8.component.css']
})
export class Detail8Component implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location) { }
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

}