const { Router } = require('express');
const {
    getAllGenres
} = require('./controllers');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", async(req , res) =>{
    let TodosLosGeneros = await getAllGenres()
    res.status(200).send(TodosLosGeneros)
})


module.exports = router;