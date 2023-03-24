const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

class Signature extends Model {}

Signature.init( 
    {
        fullname: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Signature'
    }
)

module.exports = Signature