"use client"
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home ()  {
    return (
        <div className={styles.body}>
          <header className={styles.navbar}>
            <div className={styles.navbarLeft}>
              <Link href={'/'}>Sair</Link>
            </div>
            <div className={styles.navbarCenter}>
                Meu Quadro
            </div>
            <div className={styles.navbarRight}>
              <span>USUARIO</span>
            </div>
          </header>
        </div>
    );

}