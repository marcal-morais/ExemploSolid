import PrismaUsersRepository from '../../repositories/implementations/PrismaUsersRepository';
import RemoveUserUseCase from './RemoveUserUseCase';
import RemoveUserController from './RemoveUserController';

const prismaUsersRepository = new PrismaUsersRepository();

const removeUserUseCase = new RemoveUserUseCase(
  prismaUsersRepository,
);

const removeUserController = new RemoveUserController(
  removeUserUseCase,
);

export { removeUserUseCase, removeUserController };
