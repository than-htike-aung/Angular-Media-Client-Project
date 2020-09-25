import { Component, OnInit } from '@angular/core';
import {Cart} from "../sysgen/Cart";
import {LocalService} from "../sysgen/localservice";

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  products;
  grandTotal = 0;

  constructor(private http:LocalService) { }

  ngOnInit(): void {
    this.products = Cart.getDBItems();
    this.products.forEach((product)=>{
      this.grandTotal += product.price * product.count;
    })
  }

  reduce(product, num){
    if (num !=-1){
      Cart.reduce(product,num);
      this.ngOnInit();
    }else{
      if (product.count > 1){
        Cart.reduce(product,num);
        this.ngOnInit();
      }
    }
  }

  deleteProduct(product){
    //console.log(product);
    Cart.deleteProduct(product);
    this.ngOnInit();
  }

  billOut(){
    let items = Cart.getDBItems();
    let orderProducts = [];
    items.forEach((product)=>{
      let key = product._id;
      let value = product.count;
      let obj = {};
      obj[key] = value;
      orderProducts.push(obj);
    });

    let formData = new FormData();
    formData.append('uid', '1');
    formData.append('ords', JSON.stringify((orderProducts)));

    this.http.postOrder(formData).subscribe(
      response =>{
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }
}
