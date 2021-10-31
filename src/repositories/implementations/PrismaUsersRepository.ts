import { PrismaClient } from '@prisma/client';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export default class PrismaUsersRepository implements IUsersRepository {
  private prisma: PrismaClient = new PrismaClient();

  public async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany({ include: { groups: true } });
    return users;
  }

  public async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    return user;
  }

  public async findById(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });

    return user;
  }

  public async save(user: User): Promise<void> {
    await this.prisma.user.create({
      data: user,
    });
  }

  public async update(user: User): Promise<void> {
    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: user,
    });
  }

  public async delete(user: User): Promise<void> {
    await this.prisma.user.delete({
      where: user,
    });
  }
}
