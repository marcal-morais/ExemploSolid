import { Request, Response } from 'express';
import { IUpdateUserDTO } from './IUpdateUserDTO';
import UpdateUserUseCase from './UpdateUserUseCase';

export default class UpdateUserController {
  private updateUserUseCase: UpdateUserUseCase;

  constructor(updateUserUseCase: UpdateUserUseCase) {
    this.updateUserUseCase = updateUserUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const data = <IUpdateUserDTO>request.body;

    try {
      await this.updateUserUseCase.execute(data);

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
