module.exports = (sequelize,type)=>{
    return sequelize.define('combustible',{
        ID_COM:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        CODIGO_COMBUSTIBLE: type.INTEGER,
        DESCRIPCION_COMBUSTIBLE: type.STRING
    },{
        timestamps: false,
        freezeTableName: true,
        logging:false
    })
}
