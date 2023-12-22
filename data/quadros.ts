import { PrismaClient, Quadro } from "prisma/prisma-client";

const prisma = new PrismaClient();

export async function obterQuadro(): Promise<Array<Quadro>> {
    const quadros = await prisma.quadro.findMany();
    return quadros;
  }

export async function retornarQuadros(nome: string): Promise<Array<Quadro>> {

  const res = await fetch(
    'http://localhost:3000/api/obterQuadros',
    { method: 'POST', body: JSON.stringify({ nome: nome }) }
  );

  if (!res.ok) {
    throw Error('Não foi possível obter os quadros');
  }

  return res.json();
};

