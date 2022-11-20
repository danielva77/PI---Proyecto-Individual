const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Plataform',{
    // No es necesario ID
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
}