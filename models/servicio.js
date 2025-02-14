module.exports = (sequelize,type)=>{
    return sequelize.define('servicio',{
        ID_SER:{
            type:type.INTEGER,
            primaryKey:true
        },
        CODIGO_SERVICIO: type.INTEGER,
        DESCRIPCION_SERVICIO: type.STRING
    },{
        timestamps: false,
        freezeTableName: true
    })
}