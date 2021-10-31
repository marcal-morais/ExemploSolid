import { Request, Response } from 'express';
import { IRemoveUserDTO } from './IRemoveUserDTO';
import RemoveUserUseCase from './RemoveUserUseCase';

export default class RemoveUserController {
  private removeUserUseCase: RemoveUserUseCase;

  constructor(removeUserUseCase: RemoveUserUseCase) {
    this.removeUserUseCase = removeUserUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const data = <IRemoveUserDTO>request.body;

    try {
      await this.removeUserUseCase.execute(data);

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
