import { criarTarefa } from "@/data/tarefas";

export async function POST(request: Request) {
    
    const res = await request.json();
    const nome = res.nome;
    const descricao = res.descricao;
    const estado = res.estado;



    if (!nome || !descricao || !estado ) {
        return Response.json({ resposta: false })
    }
    
    const resp = await criarTarefa({
        nome: nome,
        descricao: descricao,
        estado: estado,
        id: 0,
        inicio: undefined
    });
    
    return Response.json({ resposta: resp})
}