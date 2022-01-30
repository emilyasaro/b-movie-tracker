import { Model, DataTypes } from 'sequelize'
import db from '../db.js'

class User extends Model {}

User.init({ sequelize: db, modelName: 'user' })

export default User

