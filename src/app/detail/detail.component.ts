import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LocalService} from "../sysgen/localservice";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id;
  products;
  constructor(private route:ActivatedRoute, private http:LocalService) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.http.getCatProduct(this.id).subscribe(
      response =>{
        if (response.con){
          console.log(response.msg)
          this.products = response.msg;
        }else {
          alert(response.msg)
        }
      },
      error => {
        console.log(error)
      }
    )
  }

}
