
import { PrismaClient } from "@prisma/client";
import { logger } from "./logging.js";
const prismaClient = new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'query',
    },
    {
      emit: 'stdout',
      level: 'error',
    },
    {
      emit: 'stdout',
      level: 'info',
    },
    {
      emit: 'stdout',
      level: 'warn',
    },
  ],
})

prismaClient.$on('query', (e) => {
  console.log('Query: ' + e.query);
  console.log('Params: ' + e.params)
  console.log('Duration: ' + e.duration + 'ms')
});

prismaClient.$on("error", (e) => {
  logger.error(e);
})

prismaClient.$on("error", (e) => {
  logger.error(e);
})

prismaClient.$on("error", (e) => {
  logger.error(e);
})

prismaClient.$on("error", (e) => {
  logger.error(e);
})
