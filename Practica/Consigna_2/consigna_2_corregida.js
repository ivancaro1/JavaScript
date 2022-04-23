const fs = require('fs')                                        // import file system module
// Star of class Contenedor
class ContenedorArchivo {

    constructor(nombreArchivo){
        this.nombreArchivo = nombreArchivo;
    }

    async save(producto){   
        let contenidoArchivo;                                   // creates contenidoArchivo variable
        contenidoArchivo = await this.getAll();
        contenidoArchivo.push(producto) ;
        await this.writeFile(contenidoArchivo);
    }

    async getById(id_producto){
        let contenidoArchivo;                                   // creates contenidoArchivo variable

        function encontroId(objeto) {                           // declares a function to find the id_producto selected
            return objeto.id === id_producto;
        }
        
        contenidoArchivo = await this.getAll();

        let resultado = contenidoArchivo.find(encontroId);  // callback encontroId function to extract the object with the id selected
            if(resultado === undefined){                        // if does not find a value returns null
                resultado = null;
            }   
        return resultado;
    }

    async getAll(){
        let contenidoArchivo;                                   // creates contenidoArchivo variable
            try{
                contenidoArchivo = await fs.promises.readFile(this.nombreArchivo,'utf-8')
                return JSON.parse(contenidoArchivo) 
            }catch(err){
                contenidoArchivo = [];
                return contenidoArchivo;
            }
    }
    
    async deleteById(id_producto){                                    
        let contenidoArchivo;                                   // creates contenidoArchivo variable

        function encontroId(objeto) {                           // starts of leerArchivo async function to read products in the file
            return objeto.id === id_producto;
        }

        contenidoArchivo = await this.getAll()
            let resultado = contenidoArchivo.find(encontroId);  // callback encontroId function to extract the object with the id selected
            let indice = contenidoArchivo.indexOf(resultado);    // finds the index in the array of the id selected
                contenidoArchivo.splice(indice,1)   

        await this.writeFile(contenidoArchivo);
    }

    async deleteAll(){
        let contenidoArchivo;                                   // creates contenidoArchivo variable
        contenidoArchivo = await this.getAll()
        contenidoArchivo = [];
        await this.writeFile(contenidoArchivo);
    }

    async writeFile(objeto){
        try{
            await fs.promises.writeFile(this.nombreArchivo,JSON.stringify(objeto,null,2))
        }catch(err){
            console.log('Error de escritura')               // if there is an error print a error message
        }
    }
 }

 // ========================================================== Test =========================================================================================================
(async () => {
    const carrito = new ContenedorArchivo('productos_resultado.txt'); // carrito object is created
    console.group('getAllEmpty');
        console.log(await carrito.getAll())
    console.groupEnd();                      
    await carrito.save({                                                  
        title: 'Kia Sportage',
        price: 2500,
        thumbnail: 'https://shorturl.ae/G6aUO',
        id: 16
    }); 
    await carrito.save({                                                  
        title: 'Kialo Sportage',
        price: 1500,
        thumbnail: 'https://shorturl.ae',
        id: 15
    });
    // ========================================================== GetAll =========================================================================================================
    console.group('getAll');
        console.log(await carrito.getAll())
    console.groupEnd();
    // ========================================================== getById =========================================================================================================
    console.group('getByIdNull');
        console.log(await carrito.getById(4))
    console.groupEnd();
    console.group('getById');
        console.log(await carrito.getById(3))
    console.groupEnd();
    // ========================================================== deleteById =====================================================================================================
    console.group('deleteById');
        await carrito.deleteById(16)
        console.log('Objeto borrado')
    console.groupEnd();
    console.group('getAll');
        console.log(await carrito.getAll())
    console.groupEnd();
    // ========================================================== deleteAll =======================================================================================================
    console.group('deleteAll');
        await carrito.deleteAll()
        console.log(await carrito.getAll())
    console.groupEnd();
})()