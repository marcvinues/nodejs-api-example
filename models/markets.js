module.exports = (sequelize, Sequelize) => {
  var Market = sequelize.define('Market', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
  },
    nameEnglish: {
      type: Sequelize.STRING
    },
    nameSpanish: {
      type: Sequelize.STRING
    },
    icon:{
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.INTEGER
    }
  });
  return Market;
}