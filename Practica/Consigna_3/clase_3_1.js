const express = require('express')

const app = express()

app.get('/',(req, res) => {
    //res.end('Hola mundo')
    //res.send('hola mundo')
    res.json('Hola mundo')
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${server.address().port}`)

})

server.on('error', err => {console.log(error.message)})