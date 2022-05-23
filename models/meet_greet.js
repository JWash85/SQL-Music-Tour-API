'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meet_Greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Band, Event}) {
      // define association here
      //belongsTo is used because only one band can have a Meet_Greet
      Meet_Greet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band",
      })
      //Event
      Meet_Greet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "events",
      })
    }
  }
  Meet_Greet.init({
    event_id:{
      type:DataTypes.SMALLINT,
      allowNull: false
    }, 
    band_id:{
      type:DataTypes.SMALLINT,
      allowNull: false
    }, 
    meet_start_time:{
      type:DataTypes.DATE,
      allowNull: false
    }, 
    meet_end_time:{
      type:DataTypes.DATE,
      allowNull: false
    }, 
    meet_greet_id:{
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }, 
  }, {
    sequelize,
    modelName: 'Meet_Greet',
    tableName: 'meet_greets',
    timestamps: false,
  });
  return Meet_Greet;
};