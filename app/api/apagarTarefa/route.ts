import { excluirTarefa } from "@/data/tarefas";

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const id = res.id;

    if (!id) {
      return Response.json({ resposta: false, mensagem: 'ID não fornecido' });
    }

    const resp = await excluirTarefa(id);
    
    if (resp) {
      return Response.json({ resposta: true, mensagem: 'Tarefa excluída com sucesso' });
    } else {
      return Response.json({ resposta: false, mensagem: 'Não foi possível excluir a tarefa' });
    }
  } catch (error) {
    console.error("Erro ao processar a solicitação:", error);
    return Response.json({ resposta: false, mensagem: 'Erro ao processar a solicitação' });
  }
}
