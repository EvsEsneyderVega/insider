module.exports = (sequelize,type)=>{
    return sequelize.define('vehiculo',{
        ID_VEH:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        CODIGO_VEHICULO:{type: type.INTEGER}, 
        PLACA:{type: type.STRING}, 
        LINEA:{type: type.INTEGER}, 
        MODELO:{type: type.STRING},
        CILINDRAJE:{type: type.STRING},
        COLOR:{type: type.INTEGER}, 
        SERVICIO:{type: type.INTEGER}, 
        CLASE :{type: type.INTEGER}, 
        CARROCERIA :{type: type.INTEGER}, 
        COMBUSTIBLE:{type: type.INTEGER}, 
        CAPACIDAD :{type: type.INTEGER}, 
        N_MOTOR:{type: type.STRING},
        VIN:{type: type.STRING},
        N_SERIE:{type: type.STRING}, 
        CHASIS:{type: type.STRING},
        PAIS:{type: type.INTEGER}, 
        TIPO_MOTOR:{type: type.INTEGER}, 
        POTENCIA:{type: type.INTEGER}, 
        FECHA_VEN_SOAT:{type: type.DATE}, 
        CONVERSION_GNV:{type: type.INTEGER}, 
        FECHA_VEN_GNV:{type: type.DATE}, 
        BLINDAJE:{type: type.INTEGER}, 
        LICENCIA_TRANSITO:{type: type.STRING},
    },{
        timestamps: false,
        freezeTableName: true,
        logging: false
    })
}
