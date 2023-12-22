import { obterQuadro } from "@/data/quadros";

export async function POST() {
    return Response.json(await obterQuadro());    
}