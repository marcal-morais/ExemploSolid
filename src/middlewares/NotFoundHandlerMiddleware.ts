import { Request, Response, NextFunction } from 'express';

const notFoundHandler = (
  request: Request,
  response: Response,
  // eslint-disable-next-line no-unused-vars
  next: NextFunction,
) => {
  const message = 'Resource not found';

  response.status(404).json({ error: message });
};

export default notFoundHandler;
