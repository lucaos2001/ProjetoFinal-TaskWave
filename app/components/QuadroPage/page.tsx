"use client"
import styles from "./page.module.css";
import Link from 'next/link';

import { Tarefa } from 'prisma/prisma-client';


async function requisitarAPI(titulo: string): Promise<Array<Tarefa>> {

  const res = await fetch(
    'http://localhost:3000/api/obterTarefas',
    { method: 'POST', body: JSON.stringify({ titulo: titulo }) }
  );

  if (!res.ok) {
    throw Error('Não foi possível obter os comentários');
  }

  return res.json();
  }
  
  function formatarData(dataString) {
    const dataObj = new Date(dataString);
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return dataObj.toLocaleDateString('pt-BR', options);
  }

export default async function Home ({ params }: { params: any })  {

  const titulos = await requisitarAPI(params.nome);

  return (
    <div className={styles.body}>
      <header className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <Link href={'/'}>Sair</Link>
        </div>
        <div className={styles.navbarCenter}>
          <Link href={'./CriarTarefa'}>Nova Tarefa</Link>
          <Link href={'./ApagarTarefa'}>Deletar Tarefa</Link>
        </div>
        <div className={styles.navbarRight}>
          <span>USUARIO</span>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.lista}>
          <h2 className={styles.title}>A fazer</h2>
          <div className={styles.tarefasContainer}>
            {titulos
              .filter((c: Tarefa) => c.estado === 'fazer')
              .map((c: Tarefa) => (
                <div key={c.id} className={styles.tarefa}>
                  <h2>{c.nome}</h2>
                  <span className={styles.p}>ID: </span><span>{c.id}</span> <br />
                  <span className={styles.p}>Descrição:</span> <span>{c.descricao}</span> <br />
                  <span className={styles.p}>Data:</span> <span>{formatarData(c.inicio)}</span>
                </div>
              ))}
          </div>

        </div>

        <div className={styles.lista}>
          <h2 className={styles.title}>Fazendo</h2>
          <div className={styles.tarefasContainer}>
            {titulos
              .filter((c: Tarefa) => c.estado === 'fazendo')
              .map((c: Tarefa) => (
                <div key={c.id} className={styles.tarefa}>
                  <h2>{c.nome}</h2>
                  <span className={styles.p}>ID: </span><span>{c.id}</span> <br />
                  <span className={styles.p}>Descrição:</span> <span>{c.descricao}</span> <br />
                  <span className={styles.p}>Data:</span> <span>{formatarData(c.inicio)}</span>
                </div>
            ))}
          </div>


        <div className={styles.lista}>
          <h2 className={styles.title}>Feito</h2>
          <div className={styles.tarefasContainer}>
            {titulos
              .filter((c: Tarefa) => c.estado === 'feito')
              .map((c: Tarefa) => (
                <div key={c.id} className={styles.tarefa}>
                  <h2>{c.nome}</h2>
                  <span className={styles.p}>ID: </span><span>{c.id}</span> <br />
                  <span className={styles.p}>Descrição:</span> <span>{c.descricao}</span> <br />
                  <span className={styles.p}>Data:</span> <span>{formatarData(c.inicio)}</span>
                </div>
              ))}
          </div>

        </div>
      </div>
    </div>
    </div>
  );
}
