export class Cart {

  static db = 'cartdb';

  static getDBItems(){
    const items = localStorage.getItem(this.db);
    if (items == null){
      return [];
    }else{
      return JSON.parse(items);
    }
  }

  static saveDBItem(product){
    let items = this.getDBItems();
    let ind = items.findIndex(item => item._id == product._id);
    if (ind == -1){
      product['count'] = 1;
      items.push(product);
    }else{
      let pro = items[ind];
      pro.count = pro.count + 1;
    }
    console.log(items);
    localStorage.removeItem(this.db);
    localStorage.setItem(this.db, JSON.stringify(items));
  }

  static resetDB(){
    localStorage.removeItem(this.db);
  }

  static reduce(product,num){
   let items = this.getDBItems()
   let ind = items.findIndex(item=>item._id == product._id);
   if (ind != -1){
     let pro = items[ind];
     pro.count = pro.count + num;
   }
    localStorage.removeItem(this.db);
    localStorage.setItem(this.db, JSON.stringify(items));
  }

  static deleteProduct(product){
    let items = this.getDBItems();
    let ind = items.findIndex(item => item._id == product._id);
    if(ind != -1){
      items.splice(ind, 1);
    }
    localStorage.removeItem(this.db);
    localStorage.setItem(this.db, JSON.stringify(items));
  }

}
