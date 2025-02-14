 module.exports = (sequelize,type) =>{
    return sequelize.define('tp_motor',{
        ID_TPMOTOR:{
            type: type.INTEGER,
            primaryKey: true,
        },
        NOMBRE_TP_MOTOR: type.STRING
    },{
        timestamps: false,
        freezeTableName: true/*,
        logging:false*/
    })
 } 