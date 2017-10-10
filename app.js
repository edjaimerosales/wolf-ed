//console.log('Adios Mundo' );

//var nombre="esteban";
//var nick="Saniel";
//console.log(nombre, 'es',nick);

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Esteban')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})