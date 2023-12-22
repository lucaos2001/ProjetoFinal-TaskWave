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

export async function excluirTarefa(id: number): Promise<boolean> {

  const tarefaExcluida = await prisma.tarefa.delete({
    where: {
      id: id,
    },
  });

  return tarefaExcluida ? true : false;
}


export const findTarefaByID = async (id: number) => {
  return prisma.tarefa.findUnique({
    where: {
      id,
    }
  });
};

export const editarTarefa = async (id: number, estado: string) => {
  return await prisma.tarefa.update({
    where: { id },
    data: { estado: estado },
  });
};


export async function retornarTarefas(nome: string): Promise<Array<Tarefa>> {

  const res = await fetch(
    'http://localhost:3000/api/obterTarefas',
    { method: 'POST', body: JSON.stringify({ nome: nome }) }
  );

  if (!res.ok) {
    throw Error('Não foi possível obter as tarefas');
  }

  return res.json();
}

export function formatarData(data: string) {
  const dataObj = new Date(Date.parse(data)); // Convertendo a string para valor numérico
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return dataObj.toLocaleDateString('pt-BR', options);
}
