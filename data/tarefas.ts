import { PrismaClient, Tarefa} from "prisma/prisma-client";

const prisma = new PrismaClient();


export async function obterTarefas(): Promise<Array<Tarefa>> {
    const tarefas = await prisma.tarefa.findMany();
    return tarefas;
  }
  
export async function criarTarefa(tar: Tarefa ): Promise<boolean> {

  const tarefaCriada = await prisma.tarefa.create({
    data: {
      nome: tar.nome,
      descricao: tar.descricao,
      estado: tar.estado,
    },
  });

  return tarefaCriada ? true : false;
}
