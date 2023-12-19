
import Link from 'next/link'; 
import styles from './page.module.css';

export default function HomePage () {

    return (
        <div className={styles.body}>
            <header className={styles.navbar}>
                <div className={styles.navbarLeft}>
                    <Link href={"/"}>Sair</Link>
                </div>
                <div className={styles.navbarCenter}>
                    <Link href={"/quadros"}>Meus Quadros</Link>
                    <Link href={"/tarefas"}>Tarefas</Link>
                    <Link href={"/novoQuadro"}>+Quadro</Link>
                </div>
                <div className={styles.navbarRight}>
                    <span>USUARIO</span>
                </div>
            </header>

            <section className={styles.section}>
                <h2>Meus Quadros</h2>
                <ul className={styles.ul}>
 
                </ul>
            </section>

            <section className={styles.section}>
                <h2>Tarefas</h2>
                <ul>
                    {/* {tarefas.map((tarefa) => (
                    <li key={tarefa.id}>{tarefa.descricao}</li>
                    ))} */}
                </ul>
            </section>
        </div>
    );
};

