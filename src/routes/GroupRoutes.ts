import { Router, Request, Response } from 'express';
import { findAllGroupController } from '../useCases/FindAllGroup';
import { createGroupController } from '../useCases/CreateGroup';
import { updateGroupController } from '../useCases/UpdateGroup';
import { removeGroupController } from '../useCases/RemoveGroup';

const groupRouter = Router();

groupRouter.post('/groups',
  (
    request: Request,
    response: Response,
  ) => createGroupController.handle(request, response));

groupRouter.get('/groups',
  (
    request: Request,
    response: Response,
  ) => findAllGroupController.handle(request, response));

groupRouter.put('/groups',
  (
    request: Request,
    response: Response,
  ) => updateGroupController.handle(request, response));

groupRouter.delete('/groups',
  (
    request: Request,
    response: Response,
  ) => removeGroupController.handle(request, response));

export default groupRouter;
