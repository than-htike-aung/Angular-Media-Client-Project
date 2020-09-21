import {Injectable} from "@angular/core";
import {HttpInterceptor} from "@angular/common/http";
import {Loki} from "./loki";




@Injectable()

export class AuthInterceptor implements HttpInterceptor{

  constructor() {

  }

  intercept(req, next){
    let token = Loki.get();
    let modiR = req.clone({
      headers:req.headers.set('Authorization',`Bearer ${token}`)
    });
    return next.handle(modiR);

  }

}
