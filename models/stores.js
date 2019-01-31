module.exports = (sequelize, Sequelize)  => {
    var Store = sequelize.define('Store', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        storeName: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING,
        },
        longitude: {
            type: Sequelize.DOUBLE
        },
        latitude: {
            type: Sequelize.DOUBLE
        },
        webpage: {
            type: Sequelize.STRING
        },
        storePhone: {
            type: Sequelize.INTEGER
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
        storeNameManagerContact: {
            type: Sequelize.STRING
        },
        mailManagerContact: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
        storePhoneManagerContact: {
            type: Sequelize.INTEGER
        },
        active:{
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
        
    });
    return Store; 
}