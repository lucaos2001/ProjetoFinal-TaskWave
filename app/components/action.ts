"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { useRouter } from 'next/navigation';

export async function novoCadastro(prevState: any, formData: FormData) {
    const schema = z.object({
        nome: z.string().min(5),
        telefone: z.string().min(11),
        email: z.string().min(10),
        senha: z.string().min(8)
    });

    const parse = schema.safeParse({
        nome: formData.get('nome'),
        telefone: formData.get('telefone'),
        email: formData.get('email'),
        senha: formData.get('senha')
    });

    if (!parse.success) {
        return { mensagem: "Falha ao cadastrar o usuário" };
    }

    const dados = parse.data;

    
    const res = await requisitarAPI(
        'http://localhost:3000/api/cadastrar', 
        {   
            nome: dados.nome, 
            telefone: dados.telefone, 
            email: dados.email,
            senha: dados.senha 
        });

    if (res.resposta) {
        revalidatePath("/");
        return { mensagem: "Usuário cadastrado: " + dados.nome };
    } else {
        return { mensagem: "Não foi possível cadastrar o usuário!!" };
    }
} 

export async function apagarCadastro(prevState: any, formData: FormData) {

    const schema = z.object({
        email: z.string().min(10),
    })

    const parse = schema.safeParse({
        email: formData.get('email'),
    });

    if (!parse.success) {
        return { mensagem: 'Falha ao apagar o Usuario.' }
    }

    const dados = parse.data;

    const res = await requisitarAPI(
        'http://localhost:3000/api/deletar',
        { email: dados.email }
    );

    if (res.resposta) {
        revalidatePath('/Apagar');
        return { mensagem: 'Usuario excluído:' + dados.email };
    }
    else {
        return { mensagem: 'Não foi possível excluir o usuario:' + dados.email };
    }
}

export async function Acessar(prevState: any, formData: FormData) {
    const schema = z.object({
      email: z.string().min(10),
      senha: z.string().min(8),
    });
  
    const parse = schema.safeParse({
      email: formData.get('email'),
      senha: formData.get('senha'),
    });
  
    if (!parse.success) {
      return { mensagem: 'Falha no login.' };
    }
  
    const dados = parse.data;
  
    const router = useRouter();
  

      const res = await requisitarAPI('http://localhost:3000/api/login', {
        email: dados.email,
        senha: dados.senha,
      });
  
      if (res.resposta) {
        // Redireciona para a página desejada
        router.push('/NavHome');
        return { mensagem: 'Bem-vindo!' };
      } else {
        return { mensagem: 'E-mail ou senha incorretos.' };
      }
    } 
  
    export async function novaTarefa(prevState: any, formData: FormData) {
        const schema = z.object({
            nome: z.string().min(1),
            descricao: z.string().min(1),
            estado: z.string().min(1)

        });
    
        const parse = schema.safeParse({
            nome: formData.get('nome'),
            descricao: formData.get('descricao'),
            estado: formData.get('estado')
        });
    
        if (!parse.success) {
            return { mensagem: "Falha ao cadastrar o usuário" };
        }
    
        const dados = parse.data;
    
        
        const res = await requisitarAPI(
            'http://localhost:3000/api/novaTarefa', 
            {   
                nome: dados.nome, 
                descricao: dados.descricao, 
                estado: dados.estado,
            });
    
        if (res.resposta) {
            revalidatePath("/");
            return { mensagem: "Tarefa Criada: " + dados.nome };
        } else {
            return { mensagem: "Não foi possível criar a tarefa!!" };
        }
    } 

async function requisitarAPI(url: string, conteudo: any) {

    const res = await fetch(
        url,
        { method: 'POST', body: JSON.stringify(conteudo) }
    );
    if(!res.ok){
        return{mensagem:'Não foi possível criar o usuário'}
    }
    return res.json()

}
