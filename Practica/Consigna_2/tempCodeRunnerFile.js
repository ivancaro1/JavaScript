const fs = require('fs')
   let contenidoArchivo;
        async function saveArchivo(){
            try{
                contenidoArchivo = await fs.promises.readFile('./Practica/Consigna_2/productos_resultado.txt','utf-8')
                console.log('Archivo leido correctamente')
            }catch(err){
                console.log('Error de lectura')
            }
        }
        saveArchivo()