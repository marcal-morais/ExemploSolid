/* eslint-disable no-param-reassign */
import { IGroupsRepository } from '../../repositories/IGroupsRepository';

class FindGroupUseCase {
  private groupsRepository: IGroupsRepository;

  constructor(groupsRepository: IGroupsRepository) {
    this.groupsRepository = groupsRepository;
  }

  async execute() {
    const groups = await this.groupsRepository.findAll();
    return groups;
  }
}

export default FindGroupUseCase;
