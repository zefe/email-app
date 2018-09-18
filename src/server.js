const express = require('express');

const app = express();

app.get('*', (req, res) => {
  console.log(req.url)
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    	<meta charset="utf-8">
    	<title>Email App</title>
    </head>
    <body>
    	<div id="home-container"><h1>HELLO</h1>${req.url}</div>
    	<div id="modal-container"></div>
    	<script src="http://localhost:9000/js/home.js"></script>
    </body>
    </html>
    `)
  res.end();
})

app.listen(3000)
console.log('El server prendió en el puerto 3000')
