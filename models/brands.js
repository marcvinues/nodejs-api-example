module.exports = (sequelize, Sequelize) => {
  var Brands = sequelize.define('Brands', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
  },
    brandName: {
      type: Sequelize.STRING
    },
    background:{
      type: Sequelize.BLOB('long')
    },
    icon:{
      type: Sequelize.BLOB('long')
    },
    status: {
      type: Sequelize.STRING
    }
  });
  return Brands;
}