"use client"
import styles from "./page.module.css";
import bg from "../../bground.jpg";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";


function SubmitButton() {

  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending} className={styles.button}>Login</button>
  );

}


export default function Home ()  {
  return (
    <div className={styles.body}
      style={{
      backgroundImage: `url(${bg.src})`,
      }}>
      <div className={styles.container}>
        <form className={styles.loginForm}>
          <h2>Login</h2>
          <input 
            type="email" 
            name="email" 
            placeholder="Email@Email.com" 
            required 
            className={styles.input} 
            autoFocus 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Senha de 8 Digitos" 
            required 
            className={styles.input} 
          />
          <hr className={styles.hr} />
          <p className={styles.paragrafo}>Não tem uma conta? <Link href={"./Cadastro"} className={styles.link}>Registre-se</Link>
          </p>
          <p className={styles.paragrafo}>Esqueceu sua senha? <Link href={"./EsqueciSenha"} className={styles.link}>Recuperar</Link></p>
          <hr className={styles.hr} />
          <SubmitButton />
          <Link href="./NavHome" className={styles.button}>Voltar</Link>
        </form>
      </div>
    </div>
  );
};
