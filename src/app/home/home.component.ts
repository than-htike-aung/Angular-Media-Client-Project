import { Component, OnInit } from '@angular/core';
import {LocalService} from "../sysgen/localservice";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

  cats;

  constructor(private http:LocalService) { }

  ngOnInit() {
    this.http.getAllCats().subscribe(
      response =>{
        if(response.con){
          console.log(response);
          this.cats = response.msg;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
