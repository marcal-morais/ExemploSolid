import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const authAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const id: string = res.locals.jwtPayload.userId;
  const prisma: PrismaClient = new PrismaClient();

  try {
    const user = await prisma.user.findUnique(
      {
        where: {
          id,
        },
      },
    );
    if (!user) {
      return res.status(401).json({ error: 'User does not have permission' });
    }
    if (user.isAdmin) return next();
    return res.status(401).json({ error: 'User does not have permission' });
  } catch (e) {
    return res.status(400).json({ error: e });
  } finally {
    await prisma.$disconnect();
  }
};

export default authAdmin;
