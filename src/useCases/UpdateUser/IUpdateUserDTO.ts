import { Group } from '../../entities/Group';

export interface IUpdateUserDTO {
  id: string,
  name?: string,
  email?: string,
  isAdmin?: boolean,
  groups?: Group,
  contact?: string,
  password?: string,
}
