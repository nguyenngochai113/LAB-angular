import { Component, OnInit } from '@angular/core';
import { products} from "../guitar";


@Component({
  selector: 'app-home8',
  templateUrl: './home8.component.html',
  styleUrls: ['./home8.component.css']
})
export class Home8Component implements OnInit {

  constructor (

  ) {  }
  products = [...products]
  ngOnInit() {
  }
  
  }


