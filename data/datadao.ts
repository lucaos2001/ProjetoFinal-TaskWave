import { PrismaClient, Cadastrado } from "prisma/prisma-client";

const prisma = new PrismaClient();

/** 
export async function obterUsuarios(): Promise<Array<Cadastrado>> {
  const cadastrados = await prisma.cadastrado.findMany;
  return cadastrados;
}
*/

export async function criarUsuario(usuario: Cadastrado ): Promise<boolean> {

    const usuarioCriado = await prisma.cadastrado.create({
      data: {
        nome: usuario.nome,
        telefone: usuario.telefone,
        email: usuario.email,
        senha: usuario.senha,
      },
    });

    return usuarioCriado ? true : false;
}

export async function consultarUsuario(email: string, senha: string): Promise<{ email: string, senha: string } | null> {
  try {
      const usuario = await prisma.cadastrado.findFirst({
          where: {
              email: email,
              senha: senha,
          },
      });
      return usuario || null;
  } catch (error) {
      console.error("Erro ao consultar usuario:", error);
      return null;
  }
}

export async function acessarPerfil(email: string, senha: string): Promise<boolean> {
  try {
    // Consulta o usuário usando a função consultarUsuario
    const usuario = await consultarUsuario(email, senha);

    // Verifica se o usuário foi encontrado
    if (!usuario) {
      return false;
    }

    // Se o usuário foi encontrado, retorna true
    return true;
  } catch (error) {
    // Tratamento de erro - ajuste conforme necessário
    console.error('Erro ao acessar perfil:', error);
    return false;
  }
}

export async function excluirUsuario(email: string ): Promise<boolean> {

  const usuarioCriado = await prisma.cadastrado.delete({
    where: {
      email: email
    }
  });

  return usuarioCriado ? true : false;
}

export const findUserByEmail = async (email: string) => {
  return prisma.cadastrado.findUnique({
    where: { email },
  });
};