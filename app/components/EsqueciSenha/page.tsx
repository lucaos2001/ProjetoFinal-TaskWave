"use client"

import React, { ChangeEvent, useState } from "react";
import styles from "./page.module.css"
import Link from "next/link";
import bg from "../../bground.jpg";

export default function FormEsqueciSenha() {
  const [codigo, setCodigo] = useState<string>("");
  const [novaSenha, setNovaSenha] = useState<string>("");
  const [confSenha, setConfSenha] = useState<string>("");

  const codigoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCodigo(e.target.value);
  };

  const nsenhaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNovaSenha(e.target.value);
  };

  const csenhaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfSenha(e.target.value);
  };

  const Exibir = () => {
    const SenhaUser1 = document.getElementById("nsenha") as HTMLInputElement;
    const SenhaUser2 = document.getElementById("csenha") as HTMLInputElement;

    if (SenhaUser1.type === "password") {
      SenhaUser1.type = "text";
    } else {
      SenhaUser1.type = "password";
    }

    if (SenhaUser2.type === "password") {
      SenhaUser2.type = "text";
    } else {
      SenhaUser2.type = "password";
    }
  };
  return (

    <div className={styles.body}
      style={{
      backgroundImage: `url(${bg.src})`,
      }}
      >      
      <div className={styles.container}>
        <form className={styles.registerForm}>
          <h2>Esqueci minha Senha<span className={styles.spn}><Link className={styles.x} href="/">X</Link></span></h2>
          <p>Um código será enviado no seu email ou número de telefone</p>
          
          <input 
            type="text" 
            id="codigo" 
            value={codigo} 
            required  
            placeholder="Codigo" 
            onChange={codigoChange} 
            className={styles.input} 
            autoFocus 
          />
          <input 
            type="password" 
            id="nsenha" 
            minLength={8} 
            value={novaSenha} 
            onChange={nsenhaChange}  
            placeholder="Nova Senha" 
            required 
            className={styles.input} 
          />
          <input 
            type="password" 
            id="csenha" 
            minLength={8} 
            value={confSenha} 
            onChange={csenhaChange}  
            placeholder="Confirme a senha" 
            required 
            className={styles.input} 
          />
          <hr className={styles.hr} />
          <button className={styles.button}>Confirmar</button>
          <button onClick={Exibir} className={styles.button}>Exibir Senha</button>
        </form>
      </div>
    </div>
  );
}