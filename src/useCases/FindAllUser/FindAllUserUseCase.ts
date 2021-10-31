/* eslint-disable no-param-reassign */
import { IUsersRepository } from '../../repositories/IUsersRepository';

class FindUserUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute() {
    const users = await this.usersRepository.findAll();
    return users;
  }
}

export default FindUserUseCase;
