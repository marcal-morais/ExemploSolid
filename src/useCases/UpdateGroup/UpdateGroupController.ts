import { Request, Response } from 'express';
import { IUpdateGroupDTO } from './IUpdateGroupDTO';
import UpdateGroupUseCase from './UpdateGroupUseCase';

export default class UpdateGroupController {
  private updateGroupUseCase: UpdateGroupUseCase;

  constructor(updateGroupUseCase: UpdateGroupUseCase) {
    this.updateGroupUseCase = updateGroupUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const data = <IUpdateGroupDTO>request.body;

    try {
      await this.updateGroupUseCase.execute(data);

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
