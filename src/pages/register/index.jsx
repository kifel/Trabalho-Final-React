import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import { Image, Section } from "./styles";

export const Register = () => {
  const [errorS, setErrorS] = useState(null);
  const [attempt, setAttempt] = useState(1);
  const [apiResponse, setApiResponse] = useState(undefined);
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
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
      .post("https://kifel.herokuapp.com/cliente", {
        cpf: cpf,
        dataNascimento: `${dataNascimento}T18:46:19Z`,
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

  useEffect(() => {
    if (errorS?.response.data !== undefined) {
      if (errorS?.response.data.cpf !== undefined) {
        setApiResponse(undefined);
        setErrorS(null);
      }
      if (errorS?.response.data.dataNascimento !== undefined) {
        setApiResponse(undefined);
        setErrorS(null);
      }
    }
  }, [attempt]);

  return (
    <Section className="h-100 h-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <Image
                src="http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg"
                className="image-fluid"
                alt="Sample photo"
              />
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
                      Cpf
                    </label>

                    <input
                      type="text"
                      id="form3Example1q"
                      className="form-control"
                      value={cpf}
                      minLength="11"
                      maxLength="11"
                      onChange={(e) => setCpf(e.target.value)}
                      required
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
                      id="form3Example1q"
                      className="form-control mb-4"
                      value={usuario}
                      onChange={(e) => setUsuario(e.target.value)}
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline datepicker">
                        <label
                          htmlFor="exampleDatepicker1"
                          className="form-label"
                        >
                          Data de Nascimento
                        </label>

                        <input
                          type="date"
                          className="form-control"
                          id="exampleDatepicker1"
                          value={dataNascimento}
                          onChange={(e) => setDataNascimento(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline datepicker">
                        <label
                          htmlFor="exampleDatepicker1"
                          className="form-label"
                        >
                          Email
                        </label>

                        <input
                          type="email"
                          className="form-control"
                          id="exampleDatepicker1"
                          minLength="4"
                          maxLength="30"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
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
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-success btn-lg mb-1">
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
                      <div className="alert alert-danger mt-2" role="alert">
                        Erro ao cadastrar,{" "}
                        {errorS?.response.data.dataNascimento}
                      </div>
                    );
                  }
                  if (apiResponse?.status === 201) {
                    return (
                      <>
                        <div className="alert alert-primary mt-2" role="alert">
                          Conta criada com sucesso
                        </div>
                      </>
                    );
                  }
                })()}
                <div className="mt-4">
                  <NavLink to="/login" className="text-body">
                    <i className="fa fa-arrow-left me-2 mb-5"></i>Voltar
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
