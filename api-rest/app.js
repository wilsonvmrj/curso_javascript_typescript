import dotenv from 'dotenv';
dotenv.config();

import './src/database';
import express from 'express';

import userRoutes from './src/routes/userRoutes';
import tokenRouter from './src/routes/tokenRoutes';
import alunoRouter from './src/routes/alunoRoutes';
import fotoRouter from './src/routes/fotoRoutes';

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
    this.app.use('/alunos/',alunoRouter);
    this.app.use('/fotos/',fotoRouter);
  }
}

export default new App().app;
