module.exports = (sequelize,type)=>{
    return sequelize.define('propietario',{
        ID_PRO:{
            type: type.INTEGER,
            primaryKey: true
        },
        COD_PROPIETARIO: type.INTEGER,
        TP_DOCUMENTO: type.INTEGER,
        N_DOCUMENTO_PRO: type.STRING,
        NOMBRE_PRO: type.STRING,
        DIRECCION: type.STRING,
        TELEFONO: type.STRING,
        CIUDAD: type.INTEGER,
        EMAIL: type.STRING
    },{
        timestamps: false,
        freezeTableName: true
    })
}
