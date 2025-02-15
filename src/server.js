import express, { Application } from 'express';
import cors from 'cors'

// import userRoutes from '../routes/user';
// import userEvents from '../routes/event';

import db from './connection';



class Server {

  // app: Application;
  // port: string;
  apiPaths = {
    users: '/api/users',
    events: '/api/events'
    // usuarios: '/api/users'
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';

    // Métodos iniciales
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  // TODO: Conectar con la base de datos
  dbConnection() {

    db
      .authenticate()
      .then(() => {
        console.log("DATABASE CONNECTED");
      })
      .catch((err) => {
        console.log(err);
      });

  }

  // TODO: Conectar con la base de datos
  async dbConnection1() {

    try {
      await db.authenticate();
      console.log('Database está online')

    } catch (error) {
      throw new Error(error);
    }
  }


  middlewares() {
    // CORS
    this.app.use(cors({

    }))

    // Lectura del body
    this.app.use(express.json())

    // Carpeta pública
    this.app.use(express.static('public'))

  }

  routes() {
    // this.app.use(this.apiPaths.users, userRoutes)
    // this.app.use(this.apiPaths.events, userEvents)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto: " + this.port);
    })
  }
}

export default Server;