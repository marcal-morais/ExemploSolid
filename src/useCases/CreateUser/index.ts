import HostingerMailProvider from '../../providers/implementations/HostingerMailProvider';
import PrismaUsersRepository from '../../repositories/implementations/PrismaUsersRepository';
import CreateUserUseCase from './CreateUserUseCase';
import CreateUserController from './CreateUserController';

const prismaUsersRepository = new PrismaUsersRepository();
const hostingerMailProvider = new HostingerMailProvider();

const createUserUseCase = new CreateUserUseCase(
  prismaUsersRepository, hostingerMailProvider,
);

const createUserController = new CreateUserController(
  createUserUseCase,
);

export { createUserUseCase, createUserController };
