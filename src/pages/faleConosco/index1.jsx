import React, { useRef } from 'react';

import "./index.css";
import { FooterPage } from "../../components/footer";


 
export const FaleConosco = ()=> {
 
  return (
    <>
    <div className="container">
      <form>
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" name="email" placeholder="E-mail.." />
 
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" placeholder="Nome do usuário.." />
 
        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" placeholder="Digite aqui.." className="textArea"></textarea>
 
        <label htmlFor="anexo">Anexo</label>
        <input type="file" id="anexo" name="anexo" />
 
        <input type="submit" value="Enviar" />
      </form>
      
    </div>
    <FooterPage /> </>
   

  );
  
}
 


