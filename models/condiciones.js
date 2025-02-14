module.exports = (sequelize,type)=>{
    return sequelize.define('condiciones',{
        ID_COND:{
            type: type.INTEGER,
            primaryKey:true
        }, 
        N_COND:{type: type.INTEGER}, 
        TXT_COND:{type: type.STRING}, 
        CON_EST:{type: type.INTEGER}, 
        FRM_COND:{type: type.INTEGER} 
    },{
        timestamps: false,
        freezeTableName: true,
        logging: false
    })
}
