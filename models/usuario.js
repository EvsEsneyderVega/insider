module.exports = (sequelize,type)=>{
    return sequelize.define('usuario',{
        ID_USUARIO: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          ID_ESTUS: {
            type: type.INTEGER,
            allowNull: false,
          },
          NOMBRE: {
            type: type.STRING(100),
            allowNull: false,
          },
          EMAIL: {
            type: type.STRING(100),
            allowNull: false,
            unique: true,
            validate:{
                isEmail: true,
            }
          },
          ROL: {
            type: type.ENUM('ADMIN', 'EDITOR', 'VISOR', 'BOX'),
            defaultValue: 'VISOR',
          },
          FECHA_REGISTRO: {
            type: type.DATE,
            defaultValue: type.NOW,
          },
          LOGIN: {
            type: type.STRING(20),
            allowNull: true,
          },
          PASSWORD: {
            type: type.TEXT,
            allowNull: true,
          },
          CARGO: {
            type: type.STRING(45),
            allowNull: true,
          },
          FECHA_RETIRO: {
            type: type.DATE,
            allowNull: true,
          },
    },{
        timestamps: false,
        freezeTableName: true,
        logging: false
    })
}