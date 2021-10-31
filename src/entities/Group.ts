import { User } from './User';

export interface Group {
  id: string;
  name: string;
  users?: User[];
  createdAt: Date;
  updatedAt: Date;
}
