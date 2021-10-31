import { Request, Response } from 'express';
import { IRemoveGroupDTO } from './IRemoveGroupDTO';
import RemoveGroupUseCase from './RemoveGroupUseCase';

export default class RemoveGroupController {
  private removeGroupUseCase: RemoveGroupUseCase;

  constructor(removeGroupUseCase: RemoveGroupUseCase) {
    this.removeGroupUseCase = removeGroupUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const data = <IRemoveGroupDTO>request.body;

    try {
      await this.removeGroupUseCase.execute(data);

      return response.status(200).send();
    } catch (err) {
      if (err instanceof Error) {
        return response.status(400).json({
          message: err.message || 'Unexpected error.',
        });
      }
      return response.status(400).json({
        message: 'Unexpected error.',
      });
    }
  }
}
