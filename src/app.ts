import dotenv from 'dotenv';

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import notFoundHandler from './middlewares/NotFoundHandlerMiddleware';
import errorHandler from './middlewares/ErrorMiddleware';
import routes from './routes';

dotenv.config({ path: `${__dirname}/.env` });

class App {
  private app;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  public middlewares() {
    this.app.use(helmet());
    this.app.use(
      cors({
        origin: [`${process.env.CORS}`],
      }),
    );

    this.app.use(express.json());

    this.app.use((req, res, next) => {
      res.set('X-Powered-By', 'PHP/7.1.7');
      next();
    });
  }

  public routes() {
    this.app.use(routes);
  }

  public exceptionHandler() {
    this.app.use(errorHandler);
    this.app.use(notFoundHandler);
  }

  public server() {
    this.app.listen(3000);
  }
}

new App().server();
