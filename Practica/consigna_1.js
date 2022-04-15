// Star of class Contenedor
class Contenedor {
    constructor(){
        this.productos = [];                                    // Array of productos
    }

    save(producto){
        this.productos.push(producto);                          // Push producto to productos array
    }

    getById(id_prod){
        let cont = 0;                                           // Counter 
        for(let i = 0; i < this.productos.length; i++){         // Star of for
            if(this.productos[i].id === id_prod){               // Compare if id_prod is equal to id
                return this.productos[i];                       // if True return the product selected
            }else{
                cont++;                                         // if False Counter is incremented
            }
        }

        if(cont === this.productos.length);                     // if the id_prod does not exist return null
        { return null;}
    }

    getAll(){
        return this.productos;                                  // return All Products
    }

    deleteById(id_prod){    
        for(let i = 0; i < this.productos.length; i++){         // start of for
            if(this.productos[i].id === id_prod){               // Compare if id_prod is equal to id
                this.productos.splice(i,1);                     // if True the product with the id selected is deleted
            }
        }
    }

    deleteAll(){
        this.productos = [];                                    // delete all products assigning the productos array to void
    }
 }

 // ========================================================== Test =========================================================================================================
const carrito = new Contenedor();                               // carrito object is created

carrito.save({                                                  // product id 15 is added to carrito
    id: 15,
    title: 'Kia Sportage',
    price: 2500,
    thumbnail: 'https://shorturl.ae/G6aUO'
   });

carrito.save({                                                  // product id 20 is added to carrito
    id: 20,
    title: 'Chevrolet Captiva',
    price: 5000,
    thumbnail: 'https://shorturl.ae/rsLek'
});

//========================================================== GetAll =========================================================================================================
console.group('getAll');
    console.log(carrito.getAll());
console.groupEnd();
//========================================================== getById =========================================================================================================
console.group('getById');
    console.log(carrito.getById(15));                           // as id 15 exist shows the values for the product
    console.log(carrito.getById(1));                            // as id 1 does not exist shows null
console.groupEnd();
//========================================================== deleteById =====================================================================================================
console.group('deleteById');
    carrito.deleteById(20);
    console.log(carrito.getAll());                              // shows only product with id 15
console.groupEnd();
//========================================================== deleteAll =======================================================================================================
console.group('deleteAll');
    carrito.deleteAll();
    console.log(carrito.getAll());                             // doest not show no products 
console.groupEnd();
