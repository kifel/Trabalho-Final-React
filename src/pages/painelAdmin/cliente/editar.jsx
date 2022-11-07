import axios from "axios";
import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { APIResponse } from "../../../hooks/APIResponse";

export const ClienteEditar = () => {
  const { id } = useParams();
  const { data } = APIResponse(`/cliente/${id}`);
  const [errorS, setErrorS] = useState(null);
  const [apiResponse, setApiResponse] = useState(undefined);
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [usuario, setUsuario] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [complemento, setComplemento] = useState("");
  const [estado, setEstado] = useState("");
  const [numero, setNumero] = useState("");
  const [rua, setRua] = useState("");

  const cadastrar = (e) => {
    e.preventDefault();

    axios
      .put(`https://kifel.herokuapp.com/cliente/${id}`, {
        cpf: data.cpf,
        dataNascimento: `${data.dataNascimento}T18:46:19Z`,
        email: email,
        endereco: {
          cep: cep,
          bairro: bairro,
          cidade: cidade,
          complemento: complemento,
          estado: estado,
          numero: numero,
          rua: rua,
        },
        nome: nome,
        usuario: usuario,
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

                <div className="form-outline">
                  <label className="form-label" htmlFor="form3Example1q">
                    Usuário
                  </label>

                  <input
                    type="text"
                    minLength="6"
                    maxLength="15"
                    required
                    placeholder={data.usuario}
                    id="form3Example1q"
                    className="form-control mb-4"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                  />
                </div>

                <div className="form-outline">
                  <label className="form-label" htmlFor="form3Example1q">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    id="exampleDatepicker1"
                    minLength="4"
                    maxLength="30"
                    placeholder={data.email}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="row">
                  <p className="text-center fw-bold mt-2 mb-5">Endereço</p>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline datepicker">
                      <label
                        htmlFor="exampleDatepicker1"
                        className="form-label"
                      >
                        Cep
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="exampleDatepicker1"
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                        required
                        minLength="8"
                        maxLength="8"
                        placeholder={data.endereco?.cep}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline datepicker">
                      <label
                        htmlFor="exampleDatepicker1"
                        className="form-label"
                      >
                        Bairro
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="exampleDatepicker1"
                        value={bairro}
                        onChange={(e) => setBairro(e.target.value)}
                        required
                        minLength="6"
                        maxLength="40"
                        placeholder={data.endereco?.bairro}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline datepicker">
                      <label
                        htmlFor="exampleDatepicker1"
                        className="form-label"
                      >
                        Cidade
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="exampleDatepicker1"
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                        required
                        minLength="6"
                        maxLength="40"
                        placeholder={data.endereco?.cidade}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline datepicker">
                      <label
                        htmlFor="exampleDatepicker1"
                        className="form-label"
                      >
                        Estado
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="exampleDatepicker1"
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                        required
                        minLength="2"
                        maxLength="2"
                        placeholder={data.endereco?.estado}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline datepicker">
                      <label
                        htmlFor="exampleDatepicker1"
                        className="form-label"
                      >
                        Rua
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="exampleDatepicker1"
                        value={rua}
                        onChange={(e) => setRua(e.target.value)}
                        required
                        minLength="4"
                        maxLength="40"
                        placeholder={data.endereco?.rua}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline datepicker">
                      <label
                        htmlFor="exampleDatepicker1"
                        className="form-label"
                      >
                        Numero
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="exampleDatepicker1"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                        required
                        minLength="1"
                        maxLength="20"
                        placeholder={data.endereco?.numero}
                      />
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example1q">
                      Complemento
                    </label>
                    <input
                      type="text"
                      id="form3Example1q"
                      className="form-control"
                      value={complemento}
                      onChange={(e) => setComplemento(e.target.value)}
                      placeholder={data.endereco?.complemento}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-success btn-lg mb-1">
                  Submit
                </button>
              </form>
              {(() => {
                if (apiResponse?.status === 200) {
                  return (
                    <>
                      <div className="alert alert-primary mt-2 mb-2" role="alert">
                        Atualizado com Sucesso
                      </div>
                    </>
                  );
                }
              })()}
              <NavLink to="/clientes-gen" className="text-body">
                <i className="fa fa-arrow-left me-2 mt-5"></i>Voltar
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
