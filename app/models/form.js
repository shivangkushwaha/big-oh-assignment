module.exports = (sequelize, DataTypes) => {
    const Form = sequelize.define('Form', {
      uniqueId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    });
  
    Form.associate = (models) => {
      Form.hasMany(models.Response, { as: 'responses' });
    };
  
    return Form;
  };
  