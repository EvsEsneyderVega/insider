module.exports = (sequelize,type)=>{
    return sequelize.define('presion',{
        id_presion:{
            type: type.INTEGER,
            primaryKey:true}, //int(11) PK 
        id_ingreso_pr:{type: type.FLOAT}, //int(11) 
        EJE1_IZQ:{type: type.FLOAT}, //float 
        EJE1_DER:{type: type.FLOAT}, //float 
        EJE2_IZQ1:{type: type.FLOAT}, //float 
        EJE2_IZQ2:{type: type.FLOAT}, //float 
        EJE2_DER1:{type: type.FLOAT}, //float 
        EJE2_DER2:{type: type.FLOAT}, //float 
        EJE3_IZQ1:{type: type.FLOAT}, //float 
        EJE3_IZQ2:{type: type.FLOAT}, //float 
        EJE3_DER1:{type: type.FLOAT}, //float 
        EJE3_DER2:{type: type.FLOAT}, //float 
        EJE4_IZQ1:{type: type.FLOAT}, //float 
        EJE4_IZQ2:{type: type.FLOAT}, //float 
        EJE4_DER1:{type: type.FLOAT}, //float 
        EJE4_DER2:{type: type.FLOAT}, //float 
        EJE5_IZQ1:{type: type.FLOAT}, //float 
        EJE5_IZQ2:{type: type.FLOAT}, //float 
        EJE5_DER1:{type: type.FLOAT}, //float 
        EJE5_DER2:{type: type.FLOAT} //float
    },{
        timestamps: false,
        freezeTableName: true,
        logging: false
    })
} 