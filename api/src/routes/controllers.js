const axios = require('axios');
const { Videogame, Genero, Op } = require('../db');
const { API_KEY } = process.env;

const getApiVideogames = async() => {
  const apiURL = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`).data.result
  const infoExtraida = await apiURL.map((e) => {
    return {
      id: e.id,
      name: e.name,
      image: e.background_image,
      released: e.released,
      rating: e.rating,
      genres: e.genres && e.genres.map((g) => g.name).join(', '),
    };
  });
  return infoExtraida;
}

const getInfoDatabase = async() => {
	return await Videogame.findAll({
		include: {
			model: Genero,
			attributes: ['name'],
			through: {
				attributes: [],
			},
		},
	});
};

const getAllVideogames = async() => {
  let apiInfo = await getApiVideogames();
  let dbInfo = await getInfoDatabase();

  const totalVideogames = apiInfo.concat(dbInfo);
  return totalVideogames;
}
