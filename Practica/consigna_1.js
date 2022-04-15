class Contenedor {
    constructor(){
        this.productos = [];
    }

    save(producto){
        this.productos.push(producto);
    }

    getById(id_prod){
        let cont = 0;
        for(let i = 0; i < this.productos.length; i++){
            if(this.productos[i].id === id_prod){
                return this.productos[i];
            }else{
                cont++;
            }
        }

        if(cont === this.productos.length);
        { return null;}
    }

    getAll(){
        return this.productos;
    }

    deleteById(id_prod){
        for(let i = 0; i < this.productos.length; i++){
            if(this.productos[i].id === id_prod){
                this.productos.splice(i,1);
            }
        }
    }

    deleteAll(){
        this.productos = [];
    }
 }

const carrito = new Contenedor();
carrito.save({
    id: 15,
    title: 'carro',
    price: 2500,
    thumbnail: 'https://www.elcarrocolombiano.com/industria/top-75-los-carros-mas-vendidos-de-colombia-en-enero-de-2021/'
   });
carrito.save({
    id: 20,
    title: 'carro',
    price: 2500,
    thumbnail: 'https://www.elcarrocolombiano.com/industria/top-75-los-carros-mas-vendidos-de-colombia-en-enero-de-2021/'
});

//console.log(carrito.productos);
console.log(carrito.getById(2));
console.log(carrito.getAll());
//carrito.deleteAll();
carrito.deleteById(20);
console.log(carrito.getAll());