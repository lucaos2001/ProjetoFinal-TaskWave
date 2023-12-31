"use client"
import styles from "./page.module.css";
import Link from 'next/link';
import { formatarData } from '@/data/tarefas';
import { retornarTarefas } from '@/data/tarefas';
import { Tarefa } from 'prisma/prisma-client';

export default async function Home ({ params }: { params: any })  {

  const tarefas = await retornarTarefas(params.nome);

  return (
    <div className={styles.body}>
      <header className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <Link href={'./NavHome'}>Voltar</Link>
        </div>
        <div className={styles.navbarCenter}>
          <Link href={'./CriarTarefa'}>Nova Tarefa</Link>
          <Link href={'./ApagarTarefa'}>Deletar Tarefa</Link>
          <Link href={'./ModificarEstadoTarefa'}>Alterar Estado da Tarefa</Link>
        </div>
        <div className={styles.navbarRight}>
          <span>USUARIO</span>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.lista}>
          <h2 className={styles.title}>A fazer</h2>
          <div className={styles.tarefasContainer}>
            {tarefas
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
            {tarefas
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
            {tarefas
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
