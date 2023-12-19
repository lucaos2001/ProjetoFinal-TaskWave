import { excluirUsuario } from "@/data/datadao";

export async function POST(request: Request) {
    
    const res = await request.json();
    const email = res.email;

    if (!email) {
        return Response.json({ resposta: false});
    }

    const resp = await excluirUsuario(email);
    return Response.json({ reposta: resp });
}