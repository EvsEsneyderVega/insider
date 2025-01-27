module.exports = (sequelize,type)=>{
    return sequelize.define('ciudad',{
        ID_CIU:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        DIVIPO: type.STRING,
        DEPARTAMENTO_CIUDAD: type.INTEGER,
        NOMBRE_CIUDAD: type.STRING
    },{
        timestamps: false,
        freezeTableName: true
    })
}