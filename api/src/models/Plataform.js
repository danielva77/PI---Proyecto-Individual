const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Plataform',{
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
}