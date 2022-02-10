import { Model, DataTypes } from 'sequelize';
import db from '../index.js';

class User extends Model {};

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Anonymous'
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Anonymous'
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  }
  },
  { sequelize: db, modelName: 'user' }
);

export default User;

