const { Router } = require('express');
const {
    getAllPlataforms
} = require('./controllers');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", async(req , res) =>{
    let plataformas = await getAllPlataforms()
    res.status(200).send(plataformas)
})


module.exports = router;