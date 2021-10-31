import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { IRemoveUserDTO } from './IRemoveUserDTO';

class RemoveUserUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(data: IRemoveUserDTO) {
    const userAlreadyExists = await this.usersRepository.findById(data.id);

    if (!userAlreadyExists) {
      throw new Error('User not exists.');
    }

    await this.usersRepository.delete(data as User);
  }
}

export default RemoveUserUseCase;
