const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
	getApiVideogames,
  getAllVideogames,
  getVideogamesById,
  getInfoDatabase
} = require('./controllers');



const router = Router();

router.get("/:id", async(req , res) =>{
    // res.send("Soy el get /videogame")
    const {id} = req.params;
   
    console.log("numero", id.toString().length);
    if(id.toString().length<10){
      var allVideogamesbyId = await getVideogamesById(id);
    }else{
      var allVideogamesbyId = await getInfoDatabase();
    }
    
    if(id){
      let videogameId = await allVideogamesbyId.filter(e => e.id == id);
      videogameId.length ?
      res.status(200).json(videogameId) :
      res.status(404).send("No existe juego con ese Id")
    }
})

module.exports = router;