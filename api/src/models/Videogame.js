const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1, 
        max: 5
      }
    },
    platforms: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    urlImage: {
      type: DataTypes.STRING,
      allowNull: true
    } 
  });
};

