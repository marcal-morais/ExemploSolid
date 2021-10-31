import { Request, Response } from 'express';
import { ICreateGroupDTO } from './ICreateGroupDTO';
import CreateGroupUseCase from './CreateGroupUseCase';

export default class CreateGroupController {
  private createGroupUseCase: CreateGroupUseCase;

  constructor(createGroupUseCase: CreateGroupUseCase) {
    this.createGroupUseCase = createGroupUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const data = <ICreateGroupDTO>request.body;

    try {
      await this.createGroupUseCase.execute(data);

      return response.status(201).send();
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
