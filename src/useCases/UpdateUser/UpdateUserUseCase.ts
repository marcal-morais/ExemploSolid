/* eslint-disable no-param-reassign */
import bcrypt from 'bcrypt';
import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { IUpdateUserDTO } from './IUpdateUserDTO';

class UpdateUserUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(data: IUpdateUserDTO) {
    const userAlreadyExists = await this.usersRepository.findById(data.id);

    if (!userAlreadyExists) {
      throw new Error('User not exists.');
    }

    if (data.password) { data.password = bcrypt.hashSync(data.password, 8); }

    await this.usersRepository.update(data as User);
  }
}

export default UpdateUserUseCase;
