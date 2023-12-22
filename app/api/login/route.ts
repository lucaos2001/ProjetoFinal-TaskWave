import { consultarUsuario } from "@/data/datadao";

export async function POST(request: Request) {
    const res = await request.json();
    const email = res.email;
    const senha = res.senha;
    const user = await consultarUsuario(email, senha);
    if (!email || !senha || !user || (user?.email !== email || user?.senha !== senha)) {
        return Response.json({ resposta: false });
    }
    
    return Response.json({ resposta: true });
}