const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// [ ] Videojuego con las siguientes propiedades:
// ID: * No puede ser un ID de un videojuego ya existente en la API rawg- LISTO
// Nombre * LISTO
// Descripción * LISTO
// Fecha de lanzamiento LISTO
// Rating LISTO
// Plataformas *


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id: {
        type: DataTypes.UUID, //porque UUID
        defaultValue:DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
        },
    description: { 
        type: DataTypes.STRING,
        allowNull: true
        },
    released:{ 
        type: DataTypes.STRING,
      },
    image: {
        type: DataTypes.STRING
        },
    rating:{
        type: DataTypes.INTEGER
      },
    platforms: {
        type: DataTypes.STRING,
        allowNull: false
      },
  },
  { timestamps: false } //Utilidad
  );
};
