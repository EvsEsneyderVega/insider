module.exports = (sequelize,type)=>{
    return sequelize.define('ingreso',{
        ID_ING:{
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },
        CODIGO_TING:{type: type.INTEGER}, 
        ING_TP_ING:{type: type.INTEGER}, 
        INGRESO_VEHICULO:{type: type.INTEGER}, 
        INGRESO_PROPIETARIO:{type: type.INTEGER}, 
        INGRESO_CONDUCTOR:{type: type.INTEGER}, 
        VISITA_ING:{type: type.INTEGER}, 
        FECHA_ING:{type: type.DATE}, 
        FECHA_SALIDA:{type: type.DATE}, 
        FIRMA:{type: type.BLOB('MEDIUMBLOB')}, 
        INGRESO_USUARIO:{type: type.INTEGER}, 
        COMERCIAL_ID_COMERCIAL:{type: type.INTEGER}
    },{
        timestamps: false,
        freezeTableName: true,
        logging: false
    })
}