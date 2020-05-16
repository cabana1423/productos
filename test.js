import {Products, ProductsManagement} from "./products.js";

let p1= new Products("pollo", "pollo sofia", 20);
let p2=new Products("galletas", "galletas mabel", 50);
let p3= new Products("pollo", "pollo imba", 20);
let manger =new ProductsManagement();
manger.addProducts(p1);
manger.addProducts(p2);
//manger.removeProducts(p1);
manger.updateProduucts(p1, p3);
console.log(manger.showProducts());