import { Router, Request, Response } from 'express';
import { findAllUserController } from '../useCases/FindAllUser';
import { createUserController } from '../useCases/CreateUser';
import { updateUserController } from '../useCases/UpdateUser';
import { removeUserController } from '../useCases/RemoveUser';

const userRouter = Router();

userRouter.post('/users',
  (
    request: Request,
    response: Response,
  ) => createUserController.handle(request, response));

userRouter.get('/users',
  (
    request: Request,
    response: Response,
  ) => findAllUserController.handle(request, response));

userRouter.put('/users',
  (
    request: Request,
    response: Response,
  ) => updateUserController.handle(request, response));

userRouter.delete('/users',
  (
    request: Request,
    response: Response,
  ) => removeUserController.handle(request, response));

export default userRouter;
