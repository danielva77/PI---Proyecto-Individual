const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", (req , res) =>{
    res.send("Soy el get /videogame")
})

router.post("/", (req , res) =>{
    res.send("Soy el post /videogame")
})

router.put("/", (req , res) =>{
    res.send("Soy el put /videogame")
})

router.delete("/", (req , res) =>{
    res.send("Soy el delete /videogame")
})

module.exports = router;