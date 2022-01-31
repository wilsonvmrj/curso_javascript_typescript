import dotenv from 'dotenv';
dotenv.config();

import './src/database';
import express from 'express';

import userRoutes from './src/routes/userRoutes';
import tokenRouter from './src/routes/tokenRoutes'
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();

  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true, }));
    this.app.use(express.json());
  }

  routes(){
    this.app.use('/tokens',tokenRouter);
    this.app.use('/users/',userRoutes);
  }
}

export default new App().app;
