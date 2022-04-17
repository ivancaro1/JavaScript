const fs = require('fs')                                        // import file system module
// Star of class Contenedor
class ContenedorArchivo {

    save(producto){   
        let contenidoArchivo;                                   // creates contenidoArchivo variable
        async function saveArchivo(){                           // starts of saveArchivo async function to read and write new products
            try{
                contenidoArchivo = await fs.promises.readFile('./Practica/Consigna_2/productos.txt','utf-8')
                console.log('Archivo leido correctamente')      // if there is not an error prints that the message was read in the right way
            }catch(err){
                console.log('Error de lectura')                 // if there is an error print a error message
            }
            
            if((contenidoArchivo.length <= 5) || (contenidoArchivo == '""')){   // just to check if the file is empty
                contenidoArchivo = []                           // if the file is empty, it starts to declare contenidoArchivo as a new object
                contenidoArchivo.push(producto)                 // pushes the new product at the end of the array
            }else{
                contenidoArchivo = JSON.parse(contenidoArchivo) // if the file is not empty, it means that the file contains more than one product
                contenidoArchivo.push(producto)                 // pushes the new product at the end of the array
            }
            console.log(contenidoArchivo)
        
            try{                                                // starts to overwrite the new product to the file
                await fs.promises.writeFile('./Practica/Consigna_2/productos_resultado.txt',JSON.stringify(contenidoArchivo,null,2))
                console.log('Escritura exitosa')                // if there is not an error prints that the message was written in the right way
            }catch(err){
                console.log('Error de escritura')                // if there is an error print a error message
            }
        }
        saveArchivo()                                           // runs the function saveArchivo()
    }

    getById(id_producto){
        let contenidoArchivo;                                   // creates contenidoArchivo variable

        function encontroId(objeto) {                           // declares a function to find the id_producto selected
            return objeto.id === id_producto;
        }

        async function leerArchivo(){                           // starts of leerArchivo async function to read product selected
            try{
                contenidoArchivo = await fs.promises.readFile('./Practica/Consigna_2/productos_resultado.txt','utf-8')
                console.log('Archivo leido correctamente')      // if there is not an error prints that the message was read in the right way
            }catch(err){
                console.log('Error de lectura')                 // if there is an error print a error message
            }
            contenidoArchivo = JSON.parse(contenidoArchivo)     // parses a string as text
            let resultado = contenidoArchivo.find(encontroId);  // callback encontroId function to extract the object with the id selected
            if(resultado === undefined){                        // if does not find a value returns null
                resultado = null
            }
            console.log(resultado)                              // prints the object selected
        }
        leerArchivo()                                           // runs the function leerArchivo()
    }

    getAll(){
        let contenidoArchivo;                                   // creates contenidoArchivo variable

        async function leerArchivo(){                           // starts of leerArchivo async function to read products in the file
            try{
                contenidoArchivo = await fs.promises.readFile('./Practica/Consigna_2/productos_resultado.txt','utf-8')
                console.log('Archivo leido correctamente')      // if there is not an error prints that the message was read in the right way
            }catch(err){
                console.log('Error de lectura')                 // if there is an error print a error message
            }
            contenidoArchivo = JSON.parse(contenidoArchivo)     // parses a string as text
            console.log(contenidoArchivo)                       // prints all the objects that exists in the file
        }
        leerArchivo()                                           // runs the function leerArchivo()
    }
    
    deleteById(id_producto){                                    
        let contenidoArchivo;                                   // creates contenidoArchivo variable

        function encontroId(objeto) {                           // starts of leerArchivo async function to read products in the file
            return objeto.id === id_producto;
        }
        
        async function leerArchivo(){                           // starts of leerArchivo async function to read products in the file
            try{
                contenidoArchivo = await fs.promises.readFile('./Practica/Consigna_2/productos_resultado.txt','utf-8')
                console.log('Archivo leido correctamente')      // if there is not an error prints that the message was read in the right way
            }catch(err){
                console.log('Error de lectura')                 // if there is an error print a error message
            }
            contenidoArchivo = JSON.parse(contenidoArchivo)     // parses a string as text
            let resultado = contenidoArchivo.find(encontroId);  // callback encontroId function to extract the object with the id selected
            let indice = contenidoArchivo.indexOf(resultado)    // finds the index in the array of the id selected
            contenidoArchivo.splice(indice,1)                   // deletes the object selected
            console.log(contenidoArchivo)

            try{
                await fs.promises.writeFile('./Practica/Consigna_2/productos_resultado.txt',JSON.stringify(contenidoArchivo,null,2))
                console.log('Escritura exitosa')                // if there is not an error prints that the message was written in the right way
            }catch(err){
                console.log('Error de escritura')               // if there is an error print a error message
            }
        }
        leerArchivo()                                           // runs the function leerArchivo()
    }

    deleteAll(){
        let contenidoArchivo;                                   // creates contenidoArchivo variable
        async function leerArchivo(){                           // starts of leerArchivo async function to read products in the file
            try{
                contenidoArchivo = await fs.promises.readFile('./Practica/Consigna_2/productos_resultado.txt','utf-8')
                console.log('Archivo leido correctamente')      // if there is not an error prints that the message was read in the right way
            }catch(err){
                console.log('Error de lectura')                 // if there is an error print a error message
            }
            contenidoArchivo = JSON.parse(contenidoArchivo)     // parses a string as text
            contenidoArchivo = []                               // deletes all the objects in the array
            console.log(contenidoArchivo)

            try{
                await fs.promises.writeFile('./Practica/Consigna_2/productos_resultado.txt',JSON.stringify(contenidoArchivo,null,2))
                console.log('Escritura exitosa')                // if there is not an error prints that the message was written in the right way
            }catch(err){
                console.log('Error de escritura')               // if there is an error print a error message
            }
        }       
        leerArchivo()                                           // runs the function leerArchivo()
    }
 }

 // ========================================================== Test =========================================================================================================
const carrito = new ContenedorArchivo();                       // carrito object is created
carrito.save({                                                  
    title: 'Kia Sportage',
    price: 2500,
    thumbnail: 'https://shorturl.ae/G6aUO',
    id: 15
   });
// ========================================================== GetAll =========================================================================================================
console.group('getAll');
    carrito.getAll()
console.groupEnd();
// ========================================================== getById =========================================================================================================
console.group('getById');
    carrito.getById(1)
console.groupEnd();
// ========================================================== deleteById =====================================================================================================
console.group('deleteById');
    carrito.deleteById(3)
console.groupEnd();
// ========================================================== deleteAll =======================================================================================================
console.group('deleteAll');
    carrito.deleteAll()
console.groupEnd();