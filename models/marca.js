 module.exports = (sequelize,type)=>{
    return sequelize.define('marca',{
        ID_MAR:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        COD_MARCA: type.STRING,
        DESCRIPCION_MARCA: type.STRING
    },{
        timestamps: false,
        freezeTableName: true,
        logging:false
    })
 }