import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  courses = [
    {CourseID:1050,Title:"Chemistry",Credits:3,},
    {CourseID:4022,Title:"Python",Credits:3,},
    {CourseID:4041,Title:"Macroeconomics",Credits:3,},
    {CourseID:1045,Title:"Calculus",Credits:4,},
    {CourseID:3141,Title:"DjAngo",Credits:4,},
    {CourseID:2021,Title:"Composition",Credits:3,},
    {CourseID:2042,Title:"Literature",Credits:4,}
    ];
    detail={
      cd:null,
      cr:null,
      cv:null,
      dt:null,
    };
    xeploai={
      name:null,
      date:null,
      gender: null,
      mark:0,
      result:null,
    };
    employee={
      fullname:null,
      salary:null,
      gender:'Nam',
      rate:0
    }
    list=[{
      age:'Duoi 25 tuoi',
      rate:0.07,
    },
    {
      age:' Tu 25 tuoi den 40',
      rate:0.1,
    },
    {
      age: 'Tren 40 tuoi',
      rate:0.15,
    }
  ]
  listitems = [
    {
      id: 1,
      name: "Nước ngọt",
      price: 10000,
      amount: null
    },
    {
      id: 2,
      name: "Cà phê đen",
      price: 12000,
      amount: null,
    },
    {
      id: 3,
      name: "Thuốc lá",
      price: 18000,
      amount: null,
    }
  ];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }
  Tinh(){
    this.detail.cv=(this.detail.cd + this.detail.cr)*2;
    this.detail.dt=(this.detail.cd * this.detail.cr)
    console.log((this.detail.cd + this.detail.cr))
  }
  Xeploai(){
    if(this.xeploai.mark < 5)
      this.xeploai.result="Rot";
    else
    this.xeploai.result="Dau";

  }
  Tinhthuong(){
    let s=this.employee.rate*this.employee.salary;
    if(this.employee.gender == 'Nu')
      s=s+500000
    return s;
  }
  Tongtien() {
    let total = 0;
    for (let item of this.listitems) {
      total += item.amount * item.price;
    }
    return total;
  }

}
