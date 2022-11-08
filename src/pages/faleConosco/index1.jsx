import React from "react";

import { FooterPage } from "../../components/footer";
import "./index.css";

export const FaleConosco = () => {
  return (
    <>
      <div className="container mt-5">
        <form>
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" name="email" placeholder="E-mail.." />

          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome do usuário.."
          />

          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            name="mensagem"
            placeholder="Digite aqui.."
            className="textArea"
          ></textarea>

          <label htmlFor="anexo">Anexo</label>
          <input type="file" id="anexo" name="anexo" />

          <input type="submit" value="Enviar" />
        </form>
        {/* <div className="container">
      <div className="row">
        <div className="col-6">
          <p>Encontre-nos</p>
        </div>
        <div className="col">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1844.077560317094!2d-42.978392357699626!3d-22.42318661173684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99b32bdbfeadc5%3A0x3fc43887de40e054!2sCondom%C3%ADnio%20Edif%C3%ADcio%20Amazonas%20-%20Av.%20Feliciano%20Sodr%C3%A9%2C%201082%20-%20V%C3%A1rzea%2C%20Teres%C3%B3polis%20-%20RJ%2C%2025963-025!5e0!3m2!1spt-BR!2sbr!4v1667798050773!5m2!1spt-BR!2sbr" width="1220px" height="200px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
        </div>
      </div>
    </div> */}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <p className="text-center mt-5">Encontre-nos</p>
            <p className="text-center mt-5">
              Somos um empresa muito focada em trazer o melhor para os nosso
              clientes, venha conhecer nossa central !!!
            </p>
          </div>
          <div className="col-12 col-lg-6 text-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2576.471501348417!2d-122.15047108533719!3d37.48507723654789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbc96de8dc419%3A0x64979e438bf4e3a5!2sMeta%20Headquarters!5e1!3m2!1spt-PT!2sbr!4v1667864780378!5m2!1spt-PT!2sbr"
              width="300"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <FooterPage />
    </>
  );
};
