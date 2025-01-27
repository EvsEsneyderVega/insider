const { Sequelize } = require("sequelize")

module.exports = (sequelize,type)=>{
    return sequelize.define('carroceria',{
        ID_CAR:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        CODIGO_CARROCERIA:{
            type: type.INTEGER,
        },
        DESCRIPCION_CARROCERIA:{
            type: type.STRING(100),
        }
    },{
        timestamps: false,
        freezeTableName: true,
        logging: false
    })
}