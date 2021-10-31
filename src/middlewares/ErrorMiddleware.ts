import { Request, Response, NextFunction } from 'express';
import HttpException from './HttpException';

const errorHandler = (
  error: HttpException,
  request: Request,
  response: Response,
  // eslint-disable-next-line no-unused-vars
  next: NextFunction,
) => {
  const status = error.statusCode || error.status || 500;
  if (process.env.NODE_ENV === 'development') {
    return response.status(status).json({ error });
  }
  return response.status(status).json({ error: 'Internal server error' });
};

export default errorHandler;
