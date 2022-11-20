const { Router } = require('express');
const {
	getApiVideogames,
	getInfoDatabase,
	getAllVideogames,
} = require('./controllers');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
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

router.put("/", (req , res) =>{
    res.send("Soy el put /videogames")
})

router.delete("/", (req , res) =>{
    res.send("Soy el delete /videogames")
})

module.exports = router;
