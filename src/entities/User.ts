import { Group } from './Group';

export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  isAdmin?: boolean;
  contact: string | null;
  groups?: Group[];
  createdAt: Date;
  updatedAt: Date;
}
