module.exports = (sequelize,type)=>{
    return sequelize.define('items_lista',{
        ID_ITEM: { 
            type: type.INTEGER,
            autoIncrement:true,
            primaryKey:true},
        COD_ITEM: {type: type.INTEGER}, 
        COD_LIST_ITEM: {type: type.INTEGER}, 
        TXT_ITEM: {type: type.STRING}
    },{
        timestamps: false,
        freezeTableName: true,
        logging: false
    })
}