import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ImageCropperModule } from 'ngx-image-cropper';
import {LocalService} from "../../sysgen/localservice";
import {Router} from "@angular/router";

@Component({
  selector: 'app-gallery-create',
  templateUrl: './gallery-create.component.html',
  styleUrls: ['./gallery-create.component.css']
})
export class GalleryCreateComponent implements OnInit {

  constructor(private http:LocalService, private router:Router) { }

  ngOnInit(): void {
  }

  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    console.log(event.base64);
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  uploadImage(){
    const formData : any = new FormData();
    let file = this.dataUrlToFile(this.croppedImage,this.imageChangedEvent.target.files[0].name);
    formData.append('image',file, file.name);
    formData.append('image', file.name);

    this.http.uploadImage(formData).subscribe(
      response =>{
        if (response.con){
          this.router.navigate(['admin/gallery'])
        }

      },
      error => {
        console.log(error);
      }
    )
  }

  dataUrlToFile(dataurl, filename) {
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while(n--){
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, {type:mime});
    }


}
