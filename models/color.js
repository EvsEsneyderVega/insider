module.exports = (sequelize,type)=>{
    return sequelize.define('color',{
        ID_COL:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        CODIGO_COLOR: type.INTEGER,
        DESCRIPCION_COLOR: type.STRING
    },{
        timestamps: false,
        freezeTableName: true
    })
}