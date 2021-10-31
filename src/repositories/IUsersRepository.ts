/* eslint-disable no-unused-vars */
import { User } from '../entities/User';

export interface IUsersRepository {
  findAll(): Promise<User[]>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  save(user: User): Promise<void>;
  update(user: User): Promise<void>;
  delete(user: User): Promise<void>;
}
