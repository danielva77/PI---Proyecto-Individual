const { Router } = require('express');
const genreRoute = require('./genre');
const videogameRoute = require('./videogame');
const videogamesRoute = require('./videogames');


const router = Router();

// Configurar los routers --> genero mis middlewares
// Ejemplo: router.use('/auth', authRouter);
router.use('/genres', genreRoute);
router.use('/videogame', videogameRoute);
router.use('/videogames', videogamesRoute);

module.exports = router;
