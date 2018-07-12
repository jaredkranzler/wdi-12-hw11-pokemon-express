const express = require('express');
const router = express.Router();
const Pokemons = require('../models/pokemon')

router.get('/:index/edit', (req, res) => {
  res.render('edit.ejs', {
    pokemon: Pokemons[req.params.index],
    index: req.params.index
  });
});

router.get('/', (req, res) => {

  res.render('index.ejs', {
    pokemons: Pokemons
  })
});

router.post('/', (req, res) => {

  const newPokemon = {
    name: req.body.name, 
    img: req.body.img,
    happy: false,
    delete: 'off'
   };
  if (req.body.happy === 'on'){
    req.body.happy = true
  } 

  Pokemons.push(newPokemon)
  res.redirect('/pokemons');
})

router.use((req, res, next) => {
  console.log("i run on every route");
  next()
})


// creat new route
router.get('/new', (req, res) => {
  res.render('new.ejs');
});


router.get('/:index', (req, res) => {  

  res.render('show.ejs', {
    pokemon: Pokemons[req.params.index]
  });
});

router.delete('/:index', (req, res) => {
    Pokemons.splice(req.params.index, 1)

    res.redirect('/pokemons')
});

router.put('/:index', (req, res) => {
  
  if(req.body.happy === 'on'){
    req.body.happy = true;
  }else {
    req.body.happy = false;
  }

  Pokemons[req.params.index] = req.body
  res.redirect('/pokemons')
})


module.exports = router;





