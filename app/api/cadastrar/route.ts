import { criarUsuario } from "@/data/datadao";

export async function POST(request: Request) {
    
    const res = await request.json();
    const nome = res.nome;
    const email = res.email;
    const senha = res.senha;
    const telefone = res.telefone;


    if (!nome || !email || !senha || !telefone) {
        return Response.json({ resposta: false })
    }
    
    const resp = await criarUsuario({ 
        nome: nome, 
        email: email, 
        senha: senha, 
        telefone: telefone 
    });
    
    return Response.json({ resposta: resp})
}