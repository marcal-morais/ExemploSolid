import PrismaGroupsRepository from '../../repositories/implementations/PrismaGroupsRepository';
import FindAllGroupUseCase from './FindAllGroupUseCase';
import FindAllGroupController from './FindAllGroupController';

const prismaGroupsRepository = new PrismaGroupsRepository();

const findAllGroupUseCase = new FindAllGroupUseCase(
  prismaGroupsRepository,
);

const findAllGroupController = new FindAllGroupController(
  findAllGroupUseCase,
);

export { findAllGroupUseCase, findAllGroupController };
