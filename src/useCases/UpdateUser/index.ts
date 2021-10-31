import PrismaUsersRepository from '../../repositories/implementations/PrismaUsersRepository';
import UpdateUserUseCase from './UpdateUserUseCase';
import UpdateUserController from './UpdateUserController';

const prismaUsersRepository = new PrismaUsersRepository();

const updateUserUseCase = new UpdateUserUseCase(
  prismaUsersRepository,
);

const updateUserController = new UpdateUserController(
  updateUserUseCase,
);

export { updateUserUseCase, updateUserController };
