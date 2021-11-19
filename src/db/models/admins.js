'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  admins.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    image: {
      type: DataTypes.STRING,
    },
    uuid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      defaultValue: 'admin',
      comment: "admin,moderator,employer,visitor"
    },
    accessList: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "list of access menu "
    },
    jwt: {
      type: DataTypes.TEXT
    },
    status: {
      type: DataTypes.INTEGER(1),
      comment: "0 = pending, 1 = active, 2 = deactivate",
    }
  }, {
    sequelize,
    modelName: 'admins',
    tableName: 'admins',
    paranoid: true,
  });
  return admins;
};