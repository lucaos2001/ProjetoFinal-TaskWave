import { consultarUsuario } from "@/data/datadao";

export async function POST(request: Request) {
    const res = await request.json()
    const email = res.email;
    const senha = res.senha;
    if (!email || !senha){
        return Response.json({resposta: false});
    }
    return Response.json({resposta: await consultarUsuario(email, senha) })
}