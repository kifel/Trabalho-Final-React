import React from "react";
import { NavLink } from "react-router-dom";
import { FooterPage } from "../../components/footer";
import './index.css';

export const PainelAdmin = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-6 col-sm-4 col-lg-3 vh-100 bg-white text-center">
            <h1>Painel de Admin</h1>
            <ul className="list-group list-group-flush mt-5">
              <li className="list-group-item"><NavLink className="nav-link" to="/clientes-gen">CLIENTES</NavLink></li>
              <li className="list-group-item"><NavLink className="nav-link" to="/funcionarios-gen">FUNCIONÁRIO</NavLink></li>
              <li className="list-group-item"><NavLink className="nav-link" to="/produtos-gen">PRODUTOS</NavLink></li>
              <li className="list-group-item"><NavLink className="nav-link" to="/pedidos-gen">PEDIDOS</NavLink></li>
              <li className="list-group-item"><NavLink className="nav-link" to="/categoria-gen">CATEGORIA</NavLink></li>
            </ul>
          </div>
          <div className="col text-center  mt-5">
            <p>Central de administração escolha uma opção para continuar</p>
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
};
