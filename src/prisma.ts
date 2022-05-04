import { PrismaClient } from "@prisma/client";

// A cada operação feita mostrar no log para acompanhar
export const prisma = new PrismaClient({
  log: ["query"],
});
