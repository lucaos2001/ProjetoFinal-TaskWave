import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'


export default function Home() {
    return (
      <div className={styles.body}>
          <header className={styles.header}>
              <h1 className={styles.logo}>TaskWave</h1>
              <div className={styles.navbarButtons}>
              <Link href="components/Login" className={styles.button}>
              Login
              </Link>
              <Link href="components/Cadastro" className={styles.button}>
                Cadastrar-se
              </Link>
              <Link href="components/Apagar" className={styles.button}>Apagar</Link>

              </div>
          </header>

          <section className={styles.section}>
            <Image className={styles.logoImage} src="/icone.png" alt="Logo da Aplicação" width={500} height={500}/>
              <p className={styles.description}>
                  Bem-vindo ao TaskWave, seu aplicativo de gerenciamento de tarefas.
                  Organize suas tarefas de forma eficiente e aumente sua produtividade.
                  Experimente agora e simplifique seu dia a dia!
              </p>
          </section>

          <footer className={styles.footer}>
              @taskwave
          </footer>
      </div>
  );
}



