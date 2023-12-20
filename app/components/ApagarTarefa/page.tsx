"use client"

import styles from './page.module.css';
import bg from "../../bground.jpg";
import { apagarTarefa } from "../action";
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


export default function FormExcluir() {


  const [state, formAction] = useFormState(apagarTarefa, estadoInicial); 
  
  return (

    <div className={styles.body}
      style={{
      backgroundImage: `url(${bg.src})`,
      }}>
      <div className={styles.container}>
        <form className={styles.registerForm} action={formAction}>
          <h2>Delete a TAREFA desejada</h2>
          <p>Preencha as informações de acordo</p>
            <input
              type="number"
              name="id"
              id="id"
              placeholder="Digite o ID da tarefa"
              required
              className={styles.input}
            />          
          <hr className={styles.hr} />
          <DeleteButton />
          <Link href="./QuadroPage" className={styles.button}>Voltar</Link>
          <p aria-live='polite' role='status'>{state?.mensagem}</p>
        </form>
      </div>
    </div>
  );
};