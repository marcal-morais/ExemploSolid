import { Group } from '../../entities/Group';
import { IGroupsRepository } from '../../repositories/IGroupsRepository';
import { IUpdateGroupDTO } from './IUpdateGroupDTO';

class UpdateGroupUseCase {
  private groupsRepository: IGroupsRepository;

  constructor(groupsRepository: IGroupsRepository) {
    this.groupsRepository = groupsRepository;
  }

  async execute(data: IUpdateGroupDTO) {
    const groupAlreadyExists = await this.groupsRepository.findById(data.id);

    if (!groupAlreadyExists) {
      throw new Error('Group not exists.');
    }

    await this.groupsRepository.update(data as Group);
  }
}

export default UpdateGroupUseCase;
