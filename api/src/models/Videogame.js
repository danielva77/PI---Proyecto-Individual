const { DataTypes } = require('sequelize');

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
        type: DataTypes.STRING,
        },
    rating:{
        type: DataTypes.INTEGER
      },
  },
  { timestamps: false } //Utilidad
  );
};
