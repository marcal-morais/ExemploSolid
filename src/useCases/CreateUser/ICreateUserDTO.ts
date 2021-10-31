import { Group } from '../../entities/Group';

export interface ICreateUserDTO {
  name: string,
  email: string,
  contact?: string,
  password: string,
  isAdmin?: boolean,
  groups?: Group[],
}
