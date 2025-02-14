module.exports = (sequelize,type)=>{
    return sequelize.define('comercial',{
        ID_COMERCIAL:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        COD_COMERCIAL: type.STRING,
        NOMBRE: type.STRING
    },{
        timestamps: false,
        freezeTableName: true,
        logging: false
    })
}
/*
ID_COMERCIAL int(11) AI PK 
COD_COMERCIAL varchar(45) 
NOMBRE varchar(45)*/