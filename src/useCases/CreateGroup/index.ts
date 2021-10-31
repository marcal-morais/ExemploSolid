import PrismaGroupsRepository from '../../repositories/implementations/PrismaGroupsRepository';
import CreateGroupUseCase from './CreateGroupUseCase';
import CreateGroupController from './CreateGroupController';

const prismaGroupsRepository = new PrismaGroupsRepository();

const createGroupUseCase = new CreateGroupUseCase(
  prismaGroupsRepository,
);

const createGroupController = new CreateGroupController(
  createGroupUseCase,
);

export { createGroupUseCase, createGroupController };
