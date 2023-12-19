import { obterTarefas } from "@/data/tarefas";

export async function POST() {
    return Response.json(await obterTarefas());    
}