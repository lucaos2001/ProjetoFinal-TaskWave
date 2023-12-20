"use client"

import styles from './page.module.css';
import bg from "../../bground.jpg";
import { novaTarefa } from "../action";
import { useFormState, useFormStatus } from "react-dom";
import Link from 'next/link';

const estadoInicial = {
  mensagem: '',
}

function SubmitButton() {

  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending} className={styles.button}>Cadastrar</button>
  );

}

export default function FormTarefas() {


  const [state, formAction] = useFormState(novaTarefa, estadoInicial);
  
  return (

    <div className={styles.body}
      style={{
      backgroundImage: `url(${bg.src})`,
      }}>
      <div className={styles.container}>
        <form className={styles.registerForm} action={formAction}>
          <h2>Nova Tarefa</h2>
          <p>Preencha as informações de acordo</p>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Titulo da tarefa"
            required
            autoFocus
            className={styles.input}
          />
          <input
            type="text"
            name="descricao"
            id="descricao"
            placeholder="Descreva o que deve ser feito"
            required
            className={styles.input}
          />          
            <input type="radio" id="fazer" name="estado" value="fazer" className={styles.input} />
            <label>Fazer</label> <br />
            <input type="radio" id="fazendo" name="estado" value="fazendo" className={styles.input} />
            <label>Fazendo</label><br />
            <input type="radio" id="feito" name="estado" value="feito" className={styles.input} />
            <label>Feito</label>  
          <hr className={styles.hr} />
          <p aria-live='polite' role='status'>{state?.mensagem}</p>
          <SubmitButton />
          <Link href="./QuadroPage" className={styles.button}>Voltar</Link>
        </form>
      </div>
    </div>  
  );
};
