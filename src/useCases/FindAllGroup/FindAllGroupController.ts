import { Request, Response } from 'express';
import FindAllGroupUseCase from './FindAllGroupUseCase';

export default class FindGroupController {
  private findAllGroupUseCase: FindAllGroupUseCase;

  constructor(findGroupUseCase: FindAllGroupUseCase) {
    this.findAllGroupUseCase = findGroupUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const groups = await this.findAllGroupUseCase.execute();

      return response.status(200).json(groups);
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
