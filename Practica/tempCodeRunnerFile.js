const fs = require('fs')
// Star of class Contenedor
class ContenedorArchivo {
    save(producto){   
        let contenidoArchivo;
        async function saveArchivo(){
            try{
                contenidoArchivo = await fs.promises.readFile('./Practica/productos_resultado.txt','utf-8')
                console.log('Archivo leido correctamente')
            }catch(err){
                console.log('Error de lectura',err)
            }
            
            contenidoArchivo.push(producto)
            console.log(contenidoArchivo)
            try{
                await fs.promises.writeFile('./Practica/productos_resultado.txt',JSON.stringify(contenidoArchivo,null,2))
                console.log('Escritura exitosa')
            }catch(err){
                console.log('Error de escritura')
            }
        }
        saveArchivo()                       
    }

    getById(id_producto){
        let contenidoArchivo;

        function encontroId(objeto) {
            return objeto.id === id_producto;
        }

        async function leerArchivo(){
            try{
                contenidoArchivo = await fs.promises.readFile('./Practica/productos_resultado.txt','utf-8')
                console.log('Archivo leido correctamente')
            }catch(err){
                console.log('Error de lectura',err)
            }
            contenidoArchivo = JSON.parse(contenidoArchivo)
            let resultado = contenidoArchivo.find(encontroId);
            if(resultado === undefined){
                resultado = null
            }
            console.log(resultado)
        }
        leerArchivo()
    }
 }

 // ========================================================== Test =========================================================================================================
const carrito = new ContenedorArchivo();                               // carrito object is created

carrito.getById(1)

// carrito.save({                                                  
//     title: 'Kia Sportage',
//     price: 2500,
//     thumbnail: 'https://shorturl.ae/G6aUO',
//     id: 15
//    });
