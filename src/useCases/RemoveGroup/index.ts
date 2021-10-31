import PrismaGroupsRepository from '../../repositories/implementations/PrismaGroupsRepository';
import RemoveGroupUseCase from './RemoveGroupUseCase';
import RemoveGroupController from './RemoveGroupController';

const prismaGroupsRepository = new PrismaGroupsRepository();

const removeGroupUseCase = new RemoveGroupUseCase(
  prismaGroupsRepository,
);

const removeGroupController = new RemoveGroupController(
  removeGroupUseCase,
);

export { removeGroupUseCase, removeGroupController };
