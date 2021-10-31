/* eslint-disable no-unused-vars */
import { Group } from '../entities/Group';

export interface IGroupsRepository {
  findAll(): Promise<Group[]>;
  findById(id: string): Promise<Group | null>;
  findByName(name: string): Promise<Group | null>;
  save(group: Group): Promise<void>;
  update(group: Group): Promise<void>;
  delete(group: Group): Promise<void>;
}
