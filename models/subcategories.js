module.exports = (sequelize, Sequelize) => {
  var Subcategories = sequelize.define('Subcategories', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    }, 
    market_id: {
    type: Sequelize.INTEGER
     },
    nameEnglish: {
      type: Sequelize.STRING
    },
    nameSpanish: {
      type: Sequelize.STRING
    },
    image:{
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });
  return Subcategories;
}