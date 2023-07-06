import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;

// This component is for fixing nextjs13 hot-reloading issues creating a bunch of new PrismaClient instances, assign prisma client to globalThis so its not affected by hot reload. Alternative would be to import prismaclient in all the components, but not recommended.
