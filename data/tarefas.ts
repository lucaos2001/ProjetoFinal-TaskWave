import { PrismaClient, Tarefa} from "prisma/prisma-client";

const prisma = new PrismaClient();


export async function obterTarefas(): Promise<Array<Tarefa>> {
    const tarefas = await prisma.tarefa.findMany();
    return tarefas;
  }
  
  