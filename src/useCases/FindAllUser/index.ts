import PrismaUsersRepository from '../../repositories/implementations/PrismaUsersRepository';
import FindAllUserUseCase from './FindAllUserUseCase';
import FindAllUserController from './FindAllUserController';

const prismaUsersRepository = new PrismaUsersRepository();

const findAllUserUseCase = new FindAllUserUseCase(
  prismaUsersRepository,
);

const findAllUserController = new FindAllUserController(
  findAllUserUseCase,
);

export { findAllUserUseCase, findAllUserController };
