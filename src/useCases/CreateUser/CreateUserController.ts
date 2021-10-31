import { Request, Response } from 'express';
import { ICreateUserDTO } from './ICreateUserDTO';
import CreateUserUseCase from './CreateUserUseCase';

export default class CreateUserController {
  private createUserUseCase: CreateUserUseCase;

  constructor(createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const data = <ICreateUserDTO>request.body;

    try {
      await this.createUserUseCase.execute(data);

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
