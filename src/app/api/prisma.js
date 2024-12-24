// lib/prisma.ts
import { PrismaClient } from '@prisma/client'

const resetPrismaClient = () => {
  if (process.env.NODE_ENV === 'development') {
    // Clear global connection
    global.prisma = undefined;
  }
  return new PrismaClient();
}

export const prisma = global.prisma || resetPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}
