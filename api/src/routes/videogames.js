const { Router } = require('express');
const {
	getApiVideogames,
	getInfoDatabase,
	getAllVideogames,
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

router.post("/", (req , res) =>{
    res.send("Soy el post /videogames")
})


module.exports = router;
