import dotenv from 'dotenv';

import express, { ErrorRequestHandler } from 'express';
import helmet from 'helmet';
import cors from 'cors';

import routes from './routes';

dotenv.config({ path: `${__dirname}/.env` });

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: [`${process.env.CORS}`],
  }),
);

app.use(express.json());

app.use((req, res, next) => {
  res.set('X-Powered-By', 'PHP/7.1.7');
  next();
});

app.use(routes);

const errorHandler: ErrorRequestHandler = (err, req, res) => {
  if (process.env.NODE_ENV === 'development') {
    return res.status(500).json(err);
  }
  return res.status(500).json({ error: 'Internal server error' });
};

app.use(errorHandler);

export default app;
