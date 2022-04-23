//const moment = require('moment')
const http = require('http')
// console.log("Hola")
// console.log(moment().startOf('day').fromNow());
// console.log(moment().calendar());

function controlador(peticion, respuesta) {
    console.log(peticion.url, peticion.metodo)
    respuesta.end('Hola mundo')
}

const server = http.createServer(controlador)

const connectedServer = server.listen(8080, () => {
    console.log(`Servidor http escuchado en el puerto ${connectedServer.address().port}`)
})

connectedServer.on('error', manejadorDeErrores)

function manejadorDeErrores(error) {
    console.log(error)
}