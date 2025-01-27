module.exports = (sequelize,type)=>{
    return sequelize.define('calificacion',{
        ID_CAL:{
            type: type.INTEGER,
            primaryKey: true
        },
        NOMBRE:{
            type: type.STRING
        }
    },{
        timestamps: false,
        freezeTableName: true,
        logging: false
    })
}