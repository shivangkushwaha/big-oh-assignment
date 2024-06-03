module.exports = (sequelize, DataTypes) => {
    const Response = sequelize.define('Response', {
      uniqueId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      phoneNumber: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      isGraduate: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    });
  
    Response.associate = (models) => {
      Response.belongsTo(models.Form);
    };
  
    return Response;
  };
  