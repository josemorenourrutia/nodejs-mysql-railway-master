import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();


const db = new Sequelize(
  {
    database: process.env.DB_NAME || 'ciutat',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    port: Number(process.env.DB_PORT || 3306), //-------------> change port here
    // logging: false
  })


// const db = new Sequelize('node', 'root', 'xino2&Xano', {
//   host: 'localhost',
//   dialect: 'mysql',
//   // logging: false
// })

export default db;