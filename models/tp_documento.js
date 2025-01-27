module.exports = (sequelize,type)=>{
    return sequelize.define('tp_documento',{
        ID_TDOC:{
            type: type.INTEGER,
            primaryKey: true
        },
        COD_TDOC: type.INTEGER,
        CODIGO_TP_DOCUMENTO_ST: type.STRING,
        DESCRIPCION_TP_DOCUMENTO: type.STRING
    },{
        timestamps: false,
        freezeTableName: true
    })
} 