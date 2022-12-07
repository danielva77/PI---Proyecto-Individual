const { Router } = require('express');
const { Op } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const { Videogame, Genero, Plataform } = require('../db');
const {
	getApiVideogames,
	getInfoDatabase,
	getAllVideogames,
  getAllPlataforms
} = require('./controllers');

const router = Router();

router.get("/", async (req , res) =>{
  const nombre = req.query.name;
  let allVideogames = await getAllVideogames();

  if(nombre){
    let videogamesName = await allVideogames.filter(el => el.name.toLowerCase().includes(nombre.toLowerCase()));
    videogamesName.length ?
    res.status(200).send(videogamesName.slice(0,15)) : 
    res.status(404).send("Videogame not found");
  }else{
    res.status(200).send(allVideogames);
  }


})

router.post("/", async(req , res) =>{
    // res.send("Soy el post /videogames")
   // let plataformas = await getAllPlataforms();
    let {name, description, released, image, rating, platforms, genres} = req.body;

    let gameCreated = await Videogame.create({
        name, 
        description,
        released, 
        image, 
        rating
    });

    if (genres.length) {
      genres.map(async genre => {
          let g = await Genero.findOrCreate({
              where: { name: genre }
          })

          gameCreated.addGenero(g[0])
          //console.log(g[0])
      })
  }
    if (platforms.length) {
      platforms.map(async platform => {
          let p = await Plataform.findOrCreate({
              where: { name: platform }
          })

          gameCreated.addPlataform(p[0]);
          console.log(p[0])
      })
  }


    res.status(200).send("Videogames created succesfully")
})


module.exports = router;
