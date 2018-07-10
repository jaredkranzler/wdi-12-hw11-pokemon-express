const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon')
var port = 3000;
app.use(express.static('public'));


app.get('/pokemon', (req, res) => {
  res.render('index.ejs', {
    pokemon: Pokemon
  });
});

app.get('/pokemon/:index', (req, res) => {
  res.render('show.ejs', {
    pokemon: Pokemon[req.params.index]
  });
});


app.listen(port, function(){
  console.log("Welcome to the Pokemon App!", port);
});
