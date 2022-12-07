const { Router } = require('express');
const {
    getAllPlataforms
} = require('./controllers');


const router = Router();


router.get("/", async(req , res) =>{
    let plataformas = await getAllPlataforms()
    res.status(200).send(plataformas)
})


module.exports = router;