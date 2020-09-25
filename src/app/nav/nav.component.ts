import { Component, OnInit } from '@angular/core';
import {LocalService} from "../sysgen/localservice";
import {Loki} from "../sysgen/loki";
import {Router} from "@angular/router";
import {Cart} from "../sysgen/Cart";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isAuth;
  cartCount = 0;

  constructor(private http:LocalService, private router:Router) { }

  ngOnInit(): void {
    this.http.authbool.subscribe(
      response =>{
        this.isAuth = response;
      }
    );
    this.http.cartChangeBool.subscribe(
      response =>{
        this.cartCount = Cart.getDBItems().length;
      }
    );
  }

  logoutUser(){
   Loki.remove();
   this.router.navigate(['/']);
   this.http.changeAuth(false);
  }

}
