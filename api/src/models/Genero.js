const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// API = 2b6c32f9f7a749d9b9119138ef9f00a0;

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Genero', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
