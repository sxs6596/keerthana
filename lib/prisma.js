const { PrismaClient } = require('@prisma/client');

let prisma;

const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Check if we're in a non-production environment
if (process.env.NODE_ENV !== 'production') {
  // Use a global variable to avoid re-instantiating PrismaClient in development
  if (!global.prismaGlobal) {
    global.prismaGlobal = prismaClientSingleton();
  }
  prisma = global.prismaGlobal;
} else {
  // In production, create a new instance each time
  prisma = prismaClientSingleton();
}

module.exports = prisma;
