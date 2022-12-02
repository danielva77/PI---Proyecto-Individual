const axios = require('axios');
const db = require('../db');
const { Videogame, Genero, Plataform, Op } = require('../db');

const getApiVideogames = async() => {
  // const url = `https://api.rawg.io/api/games?key=2b6c32f9f7a749d9b9119138ef9f00a0`;
  const searchedPages = 7;
  let extraido = [];
    for (let i = 1; i <= searchedPages; i++) {
      const url = `https://api.rawg.io/api/games?key=2b6c32f9f7a749d9b9119138ef9f00a0&page=${i}`;
      const apiURL = await axios.get(url);
      const infoExtraida = await apiURL.data.results.map((e) => {
        return {
          id: e.id,
          name: e.name,
          image: e.background_image,
          released: e.released,
          rating: e.rating,
          // platforms: e.platforms.map((p) => p.platform.name).join(', '),
          platforms: e.platforms.map((p) => p.platform.name), //array de plataformas
          genres: e.genres && e.genres.map((g) => g.name).join(', '),
        };
      });
      extraido = [...extraido, ...infoExtraida]
    }
  return extraido;
}

const getInfoDatabase = async() => {
	let db = await Videogame.findAll({
		include: [{
			model: Genero,
			attributes: ['name'],
			through: {
				attributes: [],
			},
		},{
      model :Plataform,
      attributes: ['name'],
      through : {
        attributes : [],
      }
    }]
	});
  return db;
};

const getAllVideogames = async() => {
  let apiInfo = await getApiVideogames();
  let dbInfo = await getInfoDatabase();

  const totalVideogames = apiInfo.concat(dbInfo);
  return totalVideogames;
}

const getAllGenres = async() => {
  const genreApi = await axios.get(`https://api.rawg.io/api/genres?key=2b6c32f9f7a749d9b9119138ef9f00a0`);
  const genres = await genreApi.data.results.map((e) => {return e.name}); // array de generos

  genres.forEach(e =>{
    Genero.findOrCreate({
      where:{ name: e}
    })
  })

  const allGenres = await Genero.findAll();
  return allGenres;
}

const getAllPlataforms = async()=>{
  const platformApi = await axios.get(`https://api.rawg.io/api/games?key=2b6c32f9f7a749d9b9119138ef9f00a0`);
  const platforms = await platformApi.data.results.map(e => {return e.platforms.map((p) => p.platform.name)});
  const arraysimple = platforms.flat();


  arraysimple.forEach(e =>{
    Plataform.findOrCreate({
      where:{ name: e}
    })
  })

  const allPlatform = await Plataform.findAll();
  return allPlatform;
}


module.exports = {
	getApiVideogames,
	getInfoDatabase,
	getAllVideogames,
  getAllGenres,
  getAllPlataforms
};