const express = require('express')
const moment = require('moment')

const app = express()

app.get('/',(req, res) => {
    //res.end('Hola mundo')
    res.send({response, hora})
    //res.json('Hola mundo')
})


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${server.address().port}`)
})

const hora = moment().format('H:mm:ss')
console.log(hora)
const condicional = hora.substring(2,0)
let response;

if((condicional>=6) && (condicional<=12)){
    response = "Buenos días!"
}
else if((condicional>=13) && (condicional<=19)){
    response = "Buenas tardes!"
}else if((condicional>=20) || (condicional<=5)){
    response = "Buenas noches!"
}


server.on('error', err => {console.log(error.message)})