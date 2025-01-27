module.exports = (sequelize,type)=>{
    return sequelize.define('estado',{
        ID_EST:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        NOM_EST: type.STRING,
        COD_EST: type.INTEGER,
    },{
        timestamps: false,
        freezeTableName: true,
        logging:false
    })
}