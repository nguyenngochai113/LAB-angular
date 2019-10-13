import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-detail',
  templateUrl: './detaillap06.component.html',
  styleUrls: ['./detaillap06.component.css']
})
export class Detaillap06Component implements OnInit {
  film: any;
  constructor(private router: ActivatedRoute, private http:HttpClient ) { }

  ngOnInit() {
    const url = this.router.snapshot.paramMap.get('url');
    this.getFilmId(url).subscribe(data =>{
      this.film=data;
    })
  }
  getFilmId(url:string)
  {
    return this.http.get(url);
  }
  Onback(){
    window.history.back();
    }    
}
