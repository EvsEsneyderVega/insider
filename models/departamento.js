module.exports = (sequelize,type)=>{
    
return sequelize.define('departamento',{
    ID_DEP:{
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    NOMBRE_DEP:{type: type.STRING,},
    ID_PAIS_DEP:{type: type.INTEGER}

},{timestamps: false,
    freezeTableName: true,
    logging:false
})
}