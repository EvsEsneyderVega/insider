module.exports = (sequelize,type)=>{
    return sequelize.define('formato',{
        ID_FRM: {type: type.INTEGER,primaryKey:true},//int(11) PK 
        CODIGO_FRM:{type: type.INTEGER},//int(11) 
        VERSION_FRM:{type: type.STRING}, //varchar(45) 
        CODIGO_INTERNO_FRM:{type: type.STRING}, //varchar(45) 
        FECHA_FRM:{type: type.DATE}, //datetime 
        CONDICIONES_FRM:{type: type.INTEGER}, //int(11) 
        LISTA_FORMATO:{type: type.INTEGER}, //int(11) 
        ESTADO_FRM:{type: type.INTEGER} //int(11)
    },{
        timestamps: false,
        freezeTableName: true,
        logging: false
    })
}
