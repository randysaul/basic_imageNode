const express = require('express');
const app = express();
const port = 5006;

const color = process.env.color_fuente || 'lightgray';
const fuente = process.env.fuente || 'Times New Roman';

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Color de Fuente</title>
      </head>
      <body style="background-color: black; color: ${color}; font-family: ${fuente};">
        <h1>El color de la fuente es: ${color}</h1>
        <hr>
        <p>Se agrega otro texto</p>
        <p>Otro texto adicional</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});