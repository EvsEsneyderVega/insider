module.exports = (sequelize,type)=>{
    return sequelize.define('calificacion_lista',{
        ID_CAL:{
            primaryKey: true,
            type: type.INTEGER,
            autoIncrement: true
        },
        CODIGO_INGRESO_CAL:{ 
            type: type.INTEGER
        }, 
        ITEM_CAL:{
            type: type.INTEGER
        }, 
        CALIFICACION_CAL:{
            type: type.INTEGER
        }
    },{
        timestamps: false,
        freezeTableName: true,
        logging: false
    })
}
