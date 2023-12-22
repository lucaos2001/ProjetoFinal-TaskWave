"use client"
import Link from 'next/link';
import styles from './page.module.css';
import { Quadro, Tarefa } from 'prisma/prisma-client';
import { retornarQuadros } from '@/data/quadros';
import { retornarTarefas } from '@/data/tarefas';
import { findUserByEmail } from '@/data/datadao';
import { formatarData } from '@/data/tarefas';


let localStorage;

if (typeof window !== 'undefined') {
  localStorage = window.localStorage;
} else {
  const { LocalStorage } = require('node-localstorage');
  localStorage = new LocalStorage('@/scratch');
}




export default async function HomePage({ params }: { params: any }) {
  const titulos = await retornarTarefas(params.nome);
  const quadros = await retornarQuadros(params.nome);
  
  const usuarioEmail = localStorage.getItem('usuarioEmail');
  const usuario = await findUserByEmail(usuarioEmail);

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
          <span>{usuario?.nome}</span>
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
