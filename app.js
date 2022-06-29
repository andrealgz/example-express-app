const express = require('express');
const hbs = require('hbs');
const routes = require("./config/router.config");

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(3000, () =>
  console.log("Arrancado en el puerto 3000")
);