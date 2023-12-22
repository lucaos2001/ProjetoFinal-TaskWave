"use client"
import styles from "./page.module.css";
import bg from "../../bground.jpg";
import Link from "next/link";
import { Acessar } from "../action";
import { useFormState, useFormStatus } from "react-dom";


const estadoInicial = {
  mensagem: '',
}

localStorage.removeItem("usuarioEmail")

function SubmitButton() {

  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending} className={styles.button}>Login</button>
  );

}

function ExibirSenha () {
  const SenhaUser: HTMLInputElement | null = document.getElementById("senha") as HTMLInputElement;

  if (SenhaUser && SenhaUser.type === "password") {
    SenhaUser.type = "text";
  } else if (SenhaUser) {
    SenhaUser.type = "password";
  }
};


export default function Home ()  {

  const [state, formAction] = useFormState(Acessar, estadoInicial);

  if(state?.mensagem.includes('Certo!')){
    window.location.href="./NavHome"
  }

  return (
    <div className={styles.body}
      style={{
      backgroundImage: `url(${bg.src})`,
      }}>
      <div className={styles.container}>
        <form className={styles.loginForm} action={formAction}>
          <h2>Login</h2>
          <input 
            type="email" 
            name="email" 
            id="email"
            placeholder="Email@Email.com" 
            required 
            className={styles.input} 
            autoFocus 
          />
          <input 
            type="password" 
            name="senha" 
            id="senha"
            placeholder="Senha de 8 Digitos" 
            required 
            className={styles.input} 
          />
          <hr className={styles.hr} />
          <p className={styles.paragrafo}>Não tem uma conta? <Link href={"./Cadastro"} className={styles.link}>Registre-se</Link>
          </p>
          <p className={styles.paragrafo}>Esqueceu sua senha? <Link href={"./EsqueciSenha"} className={styles.link}>Recuperar</Link></p>
          <hr className={styles.hr} />
          <p aria-live='polite' role='status'>{state?.mensagem}</p>
          <SubmitButton />
          <button type="button" onClick={ExibirSenha} className={styles.button}>Exibir Senha</button>
          <Link href="/" className={styles.button}>Voltar</Link>
        </form>
      </div>
    </div>
  );
};
