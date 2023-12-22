"use client"
import Link from 'next/link';
import styles from './page.module.css';
import { Quadro, Tarefa } from 'prisma/prisma-client';


async function requisitarAPI(nome: string): Promise<Array<Tarefa>> {

    const res = await fetch(
      'http://localhost:3000/api/obterTarefas',
      { method: 'POST', body: JSON.stringify({ nome: nome }) }
    );
  
    if (!res.ok) {
      throw Error('Não foi possível obter os comentários');
    }
  
    return res.json();
  }

async function buscarQuadros(nome: string): Promise<Array<Quadro>> {

  const res = await fetch(
    'http://localhost:3000/api/obterQuadros',
    { method: 'POST', body: JSON.stringify({ nome: nome }) }
  );

  if (!res.ok) {
    throw Error('Não foi possível obter os quadros');
  }

  return res.json();
};

function formatarData(dataString) {
  const dataObj = new Date(dataString);
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return dataObj.toLocaleDateString('pt-BR', options);
}


export default async function HomePage({ params }: { params: any }) {
  const titulos = await requisitarAPI(params.nome);
  const quadros = await buscarQuadros(params.nome);

  return (
    <div className={styles.body}>
      <header className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <Link href={'/'}>Sair</Link>
        </div>
        <div className={styles.navbarCenter}>
          <a href={'#Quadros'}>Quadros</a>
          <a href={'#tarefas'}>Tarefas</a>
          <Link href={'/novoQuadro'}>+Quadro</Link>
        </div>
        <div className={styles.navbarRight}>
          <span>USUARIO</span>
        </div>
      </header>

      <section id='Quadros' className={styles.section}>
        <h2>Meus Quadros</h2>
        <div className={styles.tarefasContainer}>
          {quadros &&
            quadros.map((c: Quadro) => (
              <div key={c.id} className={styles.tarefa}>
                <h2>{c.nome}</h2>
                <span className={styles.p}>ID: </span><span>{c.id}</span> <br />
                <span className={styles.p}>Descrição:</span> <span>{c.descricao}</span> <br />
                <Link className={styles.link} href={'./QuadroPage'}><strong>Acessar</strong></Link>

              </div>
            ))}
        </div>
      </section>

      <section id='tarefas' className={styles.section}>
        <h2>Tarefas</h2>
        <div className={styles.tarefasContainer}>
          {titulos &&
            titulos.map((c: Tarefa) => (
              <div key={c.id} className={styles.tarefa}>
                <h2>{c.nome}</h2>
                <span className={styles.p}>ID: </span><span>{c.id}</span> <br />
                <span className={styles.p}>Descrição:</span> <span>{c.descricao}</span> <br />
                <span className={styles.p}>Data:</span> <span>{formatarData(c.inicio)}</span>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
