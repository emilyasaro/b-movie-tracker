import Sequelize from 'sequelize'

const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/b_movies',
  { logging: false }
)

export default db