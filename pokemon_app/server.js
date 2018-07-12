const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
var port = 3000;
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


const pokemonController = require('./controllers/pokemonController')

//this means every route in the futuer starts
// with /fruits
app.use('/pokemons', pokemonController);



app.listen(port, function(){
  console.log("Welcome to the Pokemon App!", port);
});
