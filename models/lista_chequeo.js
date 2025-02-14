module.exports = (sequelize,type)=>{
    return sequelize.define('lista_chequeo',{
        ID_LIS_CH:{
            type: type.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        CODIGO_LISTA_CH:{type: type.INTEGER}, 
        NOMBRE_LISTA:{type: type.STRING}
    },{
        timestamps: false,
        freezeTableName: true,
        logging: false
    })
}