import PrismaGroupsRepository from '../../repositories/implementations/PrismaGroupsRepository';
import UpdateGroupUseCase from './UpdateGroupUseCase';
import UpdateGroupController from './UpdateGroupController';

const prismaGroupsRepository = new PrismaGroupsRepository();

const updateGroupUseCase = new UpdateGroupUseCase(
  prismaGroupsRepository,
);

const updateGroupController = new UpdateGroupController(
  updateGroupUseCase,
);

export { updateGroupUseCase, updateGroupController };
