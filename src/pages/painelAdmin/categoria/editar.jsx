import axios from "axios";
import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { APIResponse } from "../../../hooks/APIResponse";

export const CategoriaEditar = () => {
  const { id } = useParams();
  const { data } = APIResponse(`/categoria/${id}`);
  const [errorS, setErrorS] = useState(null);
  const [apiResponse, setApiResponse] = useState(undefined);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  const cadastrar = (e) => {
    e.preventDefault();

    axios
      .put(`https://kifel.herokuapp.com/categoria/${id}`, {
        descricao: descricao,
        nome: nome
      })
      .then((response) => {
        setApiResponse(response);
      })
      .catch((error) => {
        setErrorS(error);
      });

  };

  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card rounded-3">
            <div className="card-body p-4 p-md-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                Informe os dados
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
                    placeholder={data.nome}
                    value={nome}
                    minLength="5"
                    maxLength="60"
                    required
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example1q">
                    Nome
                  </label>

                  <input
                    type="text"
                    id="form3Example1q"
                    className="form-control"
                    placeholder={data.descricao}
                    value={descricao}
                    minLength="5"
                    maxLength="60"
                    required
                    onChange={(e) => setDescricao(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-success btn-lg mb-1">
                  Submit
                </button>
              </form>
              {(() => {
                if (apiResponse?.status === 200) {
                  return (
                    <>
                      <div
                        className="alert alert-primary mt-2 mb-2"
                        role="alert"
                      >
                        Atualizado com Sucesso
                      </div>
                    </>
                  );
                }
              })()}
              <NavLink to="/categoria-gen" className="text-body">
                <i className="fa fa-arrow-left me-2 mt-5"></i>Voltar
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
