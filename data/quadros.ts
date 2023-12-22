import { PrismaClient, Quadro } from "prisma/prisma-client";

const prisma = new PrismaClient();

export async function obterQuadro(): Promise<Array<Quadro>> {
    const quadros = await prisma.quadro.findMany();
    return quadros;
  }
