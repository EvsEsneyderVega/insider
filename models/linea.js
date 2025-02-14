module.exports = (sequelize,type)=>{
    return sequelize.define('linea',{
        ID_LINEA:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        COD_LINEA_WS: type.INTEGER,
        COD_LINEA_MARCA: type.INTEGER,
        CODIGO_LINEA: type.INTEGER,
        NOMBRE: type.STRING,
    },{
        timestamps: false,
        freezeTableName: true,
        logging:false
    })

}