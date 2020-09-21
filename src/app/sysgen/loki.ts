export class Loki {
  static save(data){
    localStorage.setItem('token', data);

  }
  static authCheck(){
    let data = localStorage.getItem('token');
    if (data != null || data != undefined){
      return true;
    }
    return false;
  }

  static  get(){
    return localStorage.getItem('token');
  }

  static remove(){
    return localStorage.removeItem('token');
  }
}
