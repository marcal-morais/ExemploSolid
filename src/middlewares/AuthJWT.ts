import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authJwt = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = <string>req.headers.authorization;
  let jwtPayload;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }
  const [, token] = authHeader.split(' ');
  try {
    jwtPayload = <any>jwt.verify(token, `${process.env.APP_SECRET}`);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    return res.status(401).json({ error: 'Token invalid' });
  }

  const { userId, username } = jwtPayload;
  const newToken = jwt.sign({ userId, username }, `${process.env.APP_SECRET}`, {
    expiresIn: '1h',
  });
  res.setHeader('token', newToken);

  // Call the next middleware or controller
  return next();
};

export default authJwt;
