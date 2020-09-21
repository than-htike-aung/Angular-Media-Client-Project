import { Component, OnInit } from '@angular/core';
import {LocalService} from "../../sysgen/localservice";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private http:LocalService) { }

  ngOnInit(): void {
    this.http.getAllAdminCat().subscribe(
      response =>{
        console.log(response)
    },
      error => {
        console.log(error);
      }
    )
  }

}
