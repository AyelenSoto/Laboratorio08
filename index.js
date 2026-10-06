require('dotenv').config()
const http = require('http')
const fs = require('fs')

function requestController(req, res){
    console.log('Bienvenidos al curso')
    fs.readFile('index.html', (err, data) => {
        res.end(data)
    })
}

const server = http.createServer(requestController)

const PORT = process.env.PORT || 10000

server.listen(PORT, function(){
    console.log("Aplicacion corriendo en: " + PORT)
})