module.exports = (sequelize, Sequelize) => {
  var Feed = sequelize.define('Feed', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
  },
    sportName: {
      type: Sequelize.STRING
    },
    section: {
      type: Sequelize.STRING
    },
    title:{
      type: Sequelize.STRING
    },
    source:{
      type: Sequelize.STRING
    },
    url:{
      type: Sequelize.STRING
    },
    image:{
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.INTEGER
    }
  });
  return Feed;
}