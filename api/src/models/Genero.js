const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Genero', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
