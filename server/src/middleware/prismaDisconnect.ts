import { PrismaClient } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';

const prisma = new PrismaClient();

export const prismaDisconnectMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.on('finish', async () => {
    await prisma.$disconnect();
  });
  next();
};
