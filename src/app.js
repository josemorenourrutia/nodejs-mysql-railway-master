import express from 'express'
import { pool } from './db.js'
import { PORT } from './config.js'

import db from './connection.js'

import Server from './server.js'

const server = new Server();

server.listen();

const app = express()

app.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM users')
  res.json(rows)
})

app.get('/ping', async (req, res) => {
  const [result] = await pool.query(`SELECT "hello world" as RESULT`);
  res.json(result[0])
})

app.get('/create', async (req, res) => {
  const result = await pool.query('INSERT INTO users(name) VALUES ("John")')
  res.json(result)
})

app.listen(db.PORT)
console.log('Server on port', db.PORT)
