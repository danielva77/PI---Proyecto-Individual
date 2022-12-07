const { Router } = require('express');
const {
    getAllGenres
} = require('./controllers');


const router = Router();


router.get("/", async(req , res) =>{
    let TodosLosGeneros = await getAllGenres()
    res.status(200).send(TodosLosGeneros)
})


module.exports = router;