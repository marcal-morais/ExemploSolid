import { Request, Response } from 'express';
import FindAllUserUseCase from './FindAllUserUseCase';

export default class FindUserController {
  private findAllUserUseCase: FindAllUserUseCase;

  constructor(findUserUseCase: FindAllUserUseCase) {
    this.findAllUserUseCase = findUserUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.findAllUserUseCase.execute();

      return response.status(200).json(users);
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
