const { DataTypes, Model } = require("sequelize");

let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;


class Books extends Model { }

Books.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    BookName: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    Author: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    Description: {
        type: DataTypes.STRING, allowNull: false, required: true,
        unique: true
    }}, {
        sequelize: sequelizeInstance, modelName: 'books',
        timestamps: false, freezeTableName: true
    }
)

module.exports = Books;