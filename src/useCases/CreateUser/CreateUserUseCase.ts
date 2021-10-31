/* eslint-disable no-param-reassign */
import bcrypt from 'bcrypt';
import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ICreateUserDTO } from './ICreateUserDTO';
import { IMailProvider } from '../../providers/IMailProvider';

class CreateUserUseCase {
  private usersRepository: IUsersRepository;

  private mailProvider: IMailProvider;

  constructor(usersRepository: IUsersRepository, mailProvider: IMailProvider) {
    this.usersRepository = usersRepository;
    this.mailProvider = mailProvider;
  }

  async execute(data: ICreateUserDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const passwordGenerate = Math.random().toString(36).slice(-8);

    data.password = bcrypt.hashSync(passwordGenerate, 8);

    await this.usersRepository.save(data as User);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      subject: 'Seja bem-vindo à plataforma',
      body: `<p>Você já pode fazer login em nossa plataforma.</p><p>Login: ${data.email}<br/>Senha: ${passwordGenerate}.</p>`,
    });
  }
}

export default CreateUserUseCase;
