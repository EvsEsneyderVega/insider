module.exports = (sequelize,type)=>{
    return sequelize.define('pais',{
        ID_PAIS:{
            type: type.INTEGER,
            primaryKey: true,
        },
        CODIGO_PAIS: type.STRING,
        DESCRIPCION_PAIS: type.STRING
    },{
        timestamps: false,
        freezeTableName: true,
        logging:false
    })
}