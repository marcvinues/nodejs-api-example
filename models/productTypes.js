module.exports = (sequelize, Sequelize) => {
  var ProductTypes = sequelize.define('ProductTypes', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    }, 
    market_id: {
      type: Sequelize.INTEGER
     },
    subcategory_id: {
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
    visible: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });
  return ProductTypes;
}