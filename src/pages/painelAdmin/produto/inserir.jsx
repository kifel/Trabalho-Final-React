import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const ProdutoGenInserir = () => {
  const [errorS, setErrorS] = useState(null);
  const [attempt, setAttempt] = useState(1);
  const [apiResponse, setApiResponse] = useState(undefined);
  const [dataFabricacao, setDataFabricacao] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [nomeFuncionario, setNomeFuncionario] = useState("");
  const [estoque, setEstoque] = useState("");
  const [valor, setValor] = useState("");
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState(undefined);

  const cadastrar = (e) => {
    e.preventDefault();

    const obj = {
      dataFabricacao: `${dataFabricacao}T18:46:19Z`,
      descricao: descricao,
      idCategoria: 1,
      idFuncionario: 1,
      nome: nome,
      nomeCategoria: categoria,
      nomeFuncionario: nomeFuncionario,
      qtdEstoque: estoque,
      valor: valor,
    };

    const json = JSON.stringify(obj);
    const blob = new Blob([foto], {
      type: "application/json",
    });

    const data = new FormData();
    data.append("produto", json);
    data.append("file", blob);
    console.log(data);

    axios({
      method: "POST",
      url: "https://kifel.herokuapp.com/produto/comFoto",
      data: data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response);
        setApiResponse(response);
      })
      .catch((error) => {
        console.log(error);
        setErrorS(error);
      });

    setAttempt(attempt + 1);
  };

  useEffect(() => {
    if (errorS?.response.data !== undefined) {
      if (errorS?.response.data.cpf !== undefined) {
        setApiResponse(undefined);
        setErrorS(null);
      }
    }
  }, [attempt]);

  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-8 col-xl-6">
          <div className="card rounded-3">
            <div className="card-body p-4 p-md-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                Informe seus dados
              </h3>

              <form
                className="px-md-2"
                onSubmit={(e) => cadastrar(e)}
                encType="multipart/form-data"
              >
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example1q">
                    Nome do Produto
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
                    Data Fabricação
                  </label>

                  <input
                    type="date"
                    id="form3Example1q"
                    className="form-control"
                    value={dataFabricacao}
                    minLength="11"
                    maxLength="11"
                    onChange={(e) => setDataFabricacao(e.target.value)}
                    required
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example1q">
                    Descrição
                  </label>

                  <textarea
                    type="text"
                    id="form3Example1q"
                    className="form-control"
                    value={descricao}
                    minLength="5"
                    maxLength="60"
                    required
                    onChange={(e) => setDescricao(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example1q">
                    Categoria
                  </label>

                  <input
                    type="text"
                    id="form3Example1q"
                    className="form-control"
                    value={categoria}
                    minLength="5"
                    maxLength="60"
                    required
                    onChange={(e) => setCategoria(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example1q">
                    Nome do Funcionario
                  </label>

                  <input
                    type="text"
                    id="form3Example1q"
                    className="form-control"
                    value={nomeFuncionario}
                    minLength="5"
                    maxLength="60"
                    required
                    onChange={(e) => setNomeFuncionario(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example1q">
                    Estoque
                  </label>

                  <input
                    type="number"
                    id="form3Example1q"
                    className="form-control"
                    value={estoque}
                    minLength="5"
                    maxLength="60"
                    required
                    onChange={(e) => setEstoque(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example1q">
                    Valor
                  </label>

                  <input
                    type="number"
                    id="form3Example1q"
                    className="form-control"
                    value={valor}
                    minLength="5"
                    maxLength="60"
                    required
                    onChange={(e) => setValor(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="file"
                    id="form3Example1q"
                    className="form-control"
                    required
                    onChange={(e) => {
                      setFoto(e.target.files[0]);
                    }}
                  />
                </div>
                <button type="submit" className="btn btn-success btn-lg mb-2">
                  Submit
                </button>
              </form>
              {(() => {
                if (errorS?.response.data.cpf !== undefined) {
                  return (
                    <div className="alert alert-danger mt-2" role="alert">
                      Erro ao cadastrar, {errorS?.response.data.cpf}
                    </div>
                  );
                }
                if (errorS?.response.data.dataNascimento !== undefined) {
                  return (
                    <div className="alert alert-danger mt-2 mb-2" role="alert">
                      Erro ao cadastrar, {errorS?.response.data.dataNascimento}
                    </div>
                  );
                }
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
                <NavLink to="/funcionarios-gen" className="text-body">
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
