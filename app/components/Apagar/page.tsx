"use client"

import Link from 'next/link';
import styles from './page.module.css';
import bg from "../../bground.jpg";
import { apagarCadastro } from "../action";
import { useFormState, useFormStatus } from "react-dom";

const estadoInicial = {
  mensagem: '',
}

function DeleteButton() {

  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending} className={styles.button} >Apagar</button>
  );

}


export default function FormCadastro() {


  const [state, formAction] = useFormState(apagarCadastro, estadoInicial); 
  
  return (

    <div className={styles.body}
      style={{
      backgroundImage: `url(${bg.src})`,
      }}>
      <div className={styles.container}>
        <form className={styles.registerForm} action={formAction}>
          <h2>Delete sua conta</h2>
          <p>Preencha as informações de acordo</p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="exemplo@email.com"
              required
              className={styles.input}
            />          
          <hr className={styles.hr} />
          <DeleteButton />
          <Link href="/" className={styles.button}>Voltar</Link>
          <p aria-live='polite' role='status'>{state?.mensagem}</p>
        </form>
      </div>
    </div>
  );
};


