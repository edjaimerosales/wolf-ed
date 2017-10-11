//console.log('Adios Mundo' );

//var nombre="esteban";
//var nick="Saniel";
//console.log(nombre, 'es',nick);

const express = require('express');
const app = express();
var port=process.env.PORT ||3000;

app.get('/', function (req, res) {
  res.send('      Lupita Ortega Lerma')
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
});