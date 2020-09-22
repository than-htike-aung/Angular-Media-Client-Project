import  {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Subject} from "rxjs";


@Injectable()
export class LocalService {

  BASE_URL = 'http://localhost:3000/';
  catUrl = this.BASE_URL + 'cats';
  detailUrl = this.BASE_URL + 'cat/';
  loginUrl = this.BASE_URL + 'user/api/login';
  adminCatUrl = this.BASE_URL + 'admin/cat/all';
  adminGalleryAllUrl = this.BASE_URL + 'admin/gallery/all';
  adminImageUploadUrl = this.BASE_URL + 'admin/image/upload';
  adminPostPaginateUrl = this.BASE_URL + 'admin/product/paginate/';
  adminPostCreateUrl = this.BASE_URL + 'admin/product/create/';

  isAuth = new Subject<boolean>();
  authbool = this.isAuth.asObservable();


  constructor(private http: HttpClient) {

  }

  changeAuth(val:boolean){
    this.isAuth.next(val);
  }

  getAllCats() {
    return this.http.get(this.catUrl).pipe(
      map(
        (response: any) => response
      )
    );
  }

  getCatProduct(id) {
    const catProductUrl = this.detailUrl + id;
    return this.http.get(catProductUrl).pipe(
      map(
        (response: any) => response
      )
    );
  }

  loginUserNow (data){
    return this.http.post(this.loginUrl, data).pipe(
      map(
        (response: any) => response
      )
    )

  };

  getAllAdminCat(){
    return this.http.get(this.adminCatUrl).pipe(
      map(
        (response:any) => response
      )
    )
  }

  getAllAdminGallery(){
    return this.http.get(this.adminGalleryAllUrl).pipe(
      map(
        (response:any)=> response
      )
    )
  }

  uploadImage(data){
   return  this.http.post(this.adminImageUploadUrl,data).pipe(
      map(
        (response:any) => response
      )
    )
  }

  getPaginatePost(start,end){
    const link = this.adminPostPaginateUrl + start + '/' + end;
    return this.http.get(link).pipe(
      map(
        (response:any) => response
      )
    );
  }

  postCreate(data){
    return this.http.post(this.adminPostCreateUrl,data).pipe(
      map(
        (response: any) => response
      )
    );
  }

}
