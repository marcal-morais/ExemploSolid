import { Group } from '../../entities/Group';
import { IGroupsRepository } from '../../repositories/IGroupsRepository';
import { IRemoveGroupDTO } from './IRemoveGroupDTO';

class RemoveGroupUseCase {
  private groupsRepository: IGroupsRepository;

  constructor(groupsRepository: IGroupsRepository) {
    this.groupsRepository = groupsRepository;
  }

  async execute(data: IRemoveGroupDTO) {
    const groupAlreadyExists = await this.groupsRepository.findById(data.id);

    if (!groupAlreadyExists) {
      throw new Error('Group not exists.');
    }

    await this.groupsRepository.delete(data as Group);
  }
}

export default RemoveGroupUseCase;
