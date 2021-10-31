import { Group } from '../../entities/Group';
import { IGroupsRepository } from '../../repositories/IGroupsRepository';
import { ICreateGroupDTO } from './ICreateGroupDTO';

class CreateGroupUseCase {
  private groupsRepository: IGroupsRepository;

  constructor(groupsRepository: IGroupsRepository) {
    this.groupsRepository = groupsRepository;
  }

  async execute(data: ICreateGroupDTO) {
    const groupAlreadyExists = await this.groupsRepository.findByName(data.name);

    if (groupAlreadyExists) {
      throw new Error('Group already exists.');
    }

    await this.groupsRepository.save(data as Group);
  }
}

export default CreateGroupUseCase;
