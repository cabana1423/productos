class Products{
    constructor(name, description, quantity){
        this.name=name;
        this.description=description;
        this.quantity=quantity;
    }
}
class ProductsManagement{
    constructor(){
        this.listproducts=[]
    }
    addProducts(product){
        this.listproducts.push(product);
    }
    removeProducts(products){
        for(var i=0;i<this.listproducts.length;i++){
            if(this.listproducts[i]== product){
                this.listproducts.splice(i, 1);
                return;
            }
        }
        return;
    }
    updateProduucts(product, newproduct){
        for(var i=0;i<this.listproducts.length;i++){
            if(this.listproducts[i]== product){
                this.listproducts[i]=newproduct;
                return;
            }
        }
    }
}