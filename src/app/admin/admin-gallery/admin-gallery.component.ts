import { Component, OnInit } from '@angular/core';
import {LocalService} from "../../sysgen/localservice";

@Component({
  selector: 'app-admin-gallery',
  templateUrl: './admin-gallery.component.html',
  styleUrls: ['./admin-gallery.component.css']
})
export class AdminGalleryComponent implements OnInit {
images;
  constructor(private  http:LocalService) { }

  ngOnInit(): void {
    this.http.getAllAdminGallery().subscribe(
      response =>{
        if (response.con){
          console.log(response.msg);
          this.images = response.msg;
        }else {
          alert(response.msg)
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  copyImage(image){
    let copyImage = 'http://localhost:3000/uploads' + image;
    let input = document.createElement('input');
    input.value = copyImage;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  }

}
