import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const CategoriaInserir = () => {
  const [errorS, setErrorS] = useState(null);
  const [attempt, setAttempt] = useState(1);
  const [apiResponse, setApiResponse] = useState(undefined);
  const [descricao, setDescricao] = useState("");
  const [nome, setNome] = useState("");

  const cadastrar = (e) => {
    e.preventDefault();

    axios
      .post("https://kifel.herokuapp.com/categoria", {
        descricao: descricao,
        nome: nome
      })
      .then((response) => {
        setApiResponse(response);
      })
      .catch((error) => {
        setErrorS(error);
      });

    setAttempt(attempt + 1);
  };

  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-8 col-xl-6">
          <div className="card rounded-3">
            <div className="card-body p-4 p-md-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                Informe seus dados
              </h3>

              <form className="px-md-2" onSubmit={(e) => cadastrar(e)}>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example1q">
                    Nome
                  </label>

                  <input
                    type="text"
                    id="form3Example1q"
                    className="form-control"
                    value={nome}
                    minLength="5"
                    maxLength="60"
                    required
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example1q">
                    Descrição
                  </label>

                  <input
                    type="text"
                    id="form3Example1q"
                    className="form-control"
                    value={descricao}
                    minLength="11"
                    maxLength="11"
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success btn-lg mb-2">
                  Submit
                </button>
              </form>
              {(() => {
                if (apiResponse?.status === 201) {
                  return (
                    <>
                      <div
                        className="alert alert-primary mt-2 mb-2"
                        role="alert"
                      >
                        Novo Funcionario Cadastrado
                      </div>
                    </>
                  );
                }
              })()}
              <div className="mt-4">
                <NavLink to="/categoria-gen" className="text-body">
                  <i className="fa fa-arrow-left me-2"></i>Voltar
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
