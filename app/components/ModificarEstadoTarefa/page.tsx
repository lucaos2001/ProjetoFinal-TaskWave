"use client"

import styles from './page.module.css';
import bg from "../../bground.jpg";
import { apagarTarefa } from "../action";
import { useFormState, useFormStatus } from "react-dom";
import Link from 'next/link';

const estadoInicial = {
  mensagem: '',
}

function SubmitButton() {

  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending} className={styles.button} >Editar</button>
  );

}


export default function FormEditarEstado() {


  const [state, formAction] = useFormState(apagarTarefa, estadoInicial); 
  
  return (

    <div className={styles.body}
      style={{
      backgroundImage: `url(${bg.src})`,
      }}>
      <div className={styles.container}>
        <form className={styles.registerForm} action={formAction}>
          <h2>Altere o estado da TAREFA desejada</h2>
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
          <fieldset>
            <legend className={styles.legend}>Qual o estado da tarefa?</legend>
            <input type="radio" id="fazer" name="estado" value="fazer" />
            <label>Fazer</label> <br />
            <input type="radio" id="fazendo" name="estado" value="fazendo" />
            <label>Fazendo</label><br />
            <input type="radio" id="feito" name="estado" value="feito" />
            <label>Feito</label>  
          </fieldset>
          <SubmitButton />
          <Link href="./QuadroPage" className={styles.button}>Voltar</Link>
          <p aria-live='polite' role='status'>{state?.mensagem}</p>
        </form>
      </div>
    </div>
  );
};