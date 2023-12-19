"use client"

import styles from './page.module.css';
import bg from "../../bground.jpg";
import { novoCadastro } from "../action";
import { useFormState, useFormStatus } from "react-dom";
import Link from 'next/link';

const estadoInicial = {
  mensagem: '',
}

function DeleteButton() {

  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending} className={styles.button} >Apagar</button>
  );

}

function SubmitButton() {

  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending} className={styles.button}>Cadastrar</button>
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


export default function FormCadastro() {


  const [state, formAction] = useFormState(novoCadastro, estadoInicial);
  
  return (

    <div className={styles.body}
      style={{
      backgroundImage: `url(${bg.src})`,
      }}>
      <div className={styles.container}>
        <form className={styles.registerForm} action={formAction}>
        <h2>Cadastre-se</h2>
        <p>Preencha as informações de acordo</p>
          <input
              type="text"
              name="nome"
              id="nome"
              placeholder="Nome completo"
              required
              autoFocus
              className={styles.input}
            />
            <input
              type="tel"
              name="telefone"
              id="telefone"
              placeholder="(00) 01234-56789"
              maxLength={13}
              required
              className={styles.input}
            />          
            <input
              type="email"
              name="email"
              id="email"
              placeholder="exemplo@email.com"
              required
              className={styles.input}
            />          
            <input               
              type="password"
              name="senha"
              id="senha"
              minLength={8}
              placeholder="Senha de 8 dígitos"
              required 
              className={styles.input} 
              />
          <hr className={styles.hr} />
          <p aria-live='polite' role='status'>{state?.mensagem}</p>
          <SubmitButton />
          <button type="button" onClick={ExibirSenha} className={styles.button}>Exibir Senha</button>
          <Link href="./Login" className={styles.button}>Voltar</Link>
        </form>
      </div>
    </div>
  );
};


