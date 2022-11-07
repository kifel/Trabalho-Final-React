import React from "react";
import img from "../../assets/bg.jpg";
import { ColorName } from "../../components/navbar/styles";
import { Produtos } from "../produtos";
import { Imagem } from "./styles";

export const Home = () => {
  
  return (
    
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <Imagem src={img} alt="Background" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">TOP <ColorName>SECRET</ColorName></h5>
            <p className="card-text lead fs-2">A MAIOR LOJA DO MERCADO TEC</p>
          </div>
        </div>
      </div>
      <Produtos />
    </div>
  );
};
