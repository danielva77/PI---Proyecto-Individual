const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", (req , res) =>{
    res.send("Soy el get /videogames")
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
