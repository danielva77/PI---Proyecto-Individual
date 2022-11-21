const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
	getApiVideogames,
} = require('./controllers');



const router = Router();

router.get("/:id", async(req , res) =>{
    // res.send("Soy el get /videogame")
    const {id} = req.params;
    const allVideogames = await getApiVideogames();

    if(id){
      let videogameId = await allVideogames.filter(e => e.id == id);
      videogameId.length ?
      res.status(200).json(videogameId) :
      res.status(404).send("No existe juego con ese Id")
    }
})

// router.post("/", (req , res) =>{
//     res.send("Soy el post /videogame")
// })

// router.put("/", (req , res) =>{
//     res.send("Soy el put /videogame")
// })

// router.delete("/", (req , res) =>{
//     res.send("Soy el delete /videogame")
// })

module.exports = router;