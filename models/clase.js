module.exports = (sequelize,type)=>{
   return sequelize.define('clase',{
        ID_CLASE:{
            type: type.INTEGER,
            primaryKey: true
        }, 
        CODIGO_CLASE: type.INTEGER,
        DESCRIPCION_CLASE: type.STRING
    },{
        timestamps: false,
        freezeTableName: true
    })
}