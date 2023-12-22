import { findTarefaByID, editarTarefa } from "@/data/tarefas";

export async function POST(request: Request) {
    
    const res = await request.json();
    const id = res.id;
    const novoEstado = res.estado
    const tarefa = await findTarefaByID(id);

    if (!id || (tarefa?.id !== id) ) {
        return Response.json({ resposta: false, mensagem: 'Não foi possível editar a tarefa' });
    }
    await editarTarefa(id, novoEstado)
    return Response.json({ resposta: true})
}