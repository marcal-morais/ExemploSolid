import { PrismaClient } from '@prisma/client';
import { Group } from '../../entities/Group';
import { IGroupsRepository } from '../IGroupsRepository';

export default class PrismaGroupsRepository implements IGroupsRepository {
  private prisma: PrismaClient = new PrismaClient();

  public async findAll(): Promise<Group[]> {
    const groups = await this.prisma.group.findMany();
    return groups;
  }

  public async findById(id: string) {
    const group = await this.prisma.group.findUnique({ where: { id } });

    return group;
  }

  public async findByName(name: string) {
    const group = await this.prisma.group.findFirst({ where: { name } });

    return group;
  }

  public async save(group: Group): Promise<void> {
    await this.prisma.group.create({
      data: group,
    });
  }

  public async update(group: Group): Promise<void> {
    await this.prisma.group.update({
      where: {
        id: group.id,
      },
      data: group,
    });
  }

  public async delete(group: Group): Promise<void> {
    await this.prisma.group.delete({
      where: group,
    });
  }
}
