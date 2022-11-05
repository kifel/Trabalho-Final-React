import axios from "axios";
import React, { useState } from "react";
import "./index.css";
import { Image, Section } from "./styles";

export const Register = () => {
  const [error, setError] = useState(null);
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

  const cadastrar = () => {
    axios
      .post("https://kifel.herokuapp.com/cliente", {
        "cpf": cpf,
        "dataNascimento": `${dataNascimento}T18:46:19Z`,
        "email": email,
        "endereco": {
          "cep": cep,
          "bairro": bairro,
          "cidade": cidade,
          "complemento": complemento,
          "estado": estado,
          "numero": numero,
          "rua": rua,
        },
        "nome": nome,
        "usuario": usuario
      })
      .catch((error) => {
        console.log(error)
        setError(error.response.status);
      });
  };

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

                <form className="px-md-2" onSubmit={void(0)}>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example1q"
                      className="form-control"
                      value={nome}
                      minLength="10"
                      required
                      onChange={(e) => setNome(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form3Example1q">
                      Nome
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example1q"
                      className="form-control"
                      value={cpf}
                      minLength="11"
                      onChange={(e) => setCpf(e.target.value)}
                      required
                    />
                    <label className="form-label" htmlFor="form3Example1q">
                      Cpf
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      minLength="6"
                      required
                      id="form3Example1q"
                      className="form-control"
                      value={usuario}
                      onChange={(e) => setUsuario(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form3Example1q">
                      Usuário
                    </label>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline datepicker">
                        <input
                          type="date"
                          className="form-control"
                          id="exampleDatepicker1"
                          value={dataNascimento}
                          onChange={(e) => setDataNascimento(e.target.value)}
                          required
                        />
                        <label
                          htmlFor="exampleDatepicker1"
                          className="form-label"
                        >
                          Data de Nascimento
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline datepicker">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleDatepicker1"
                          minLength="6"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label
                          htmlFor="exampleDatepicker1"
                          className="form-label"
                        >
                          Email
                        </label>
                      </div>
                    </div>
                    <p className="text-center">Endereço</p>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline datepicker">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleDatepicker1"
                          value={cep}
                          onChange={(e) => setCep(e.target.value)}
                          required
                          minLength="8"
                        />
                        <label
                          htmlFor="exampleDatepicker1"
                          className="form-label"
                        >
                          Cep
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline datepicker">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleDatepicker1"
                          value={bairro}
                          onChange={(e) => setBairro(e.target.value)}
                          required
                          minLength="6"
                        />
                        <label
                          htmlFor="exampleDatepicker1"
                          className="form-label"
                        >
                          Bairro
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline datepicker">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleDatepicker1"
                          value={cidade}
                          onChange={(e) => setCidade(e.target.value)}
                          required
                          minLength="6"
                        />
                        <label
                          htmlFor="exampleDatepicker1"
                          className="form-label"
                        >
                          Cidade
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline datepicker">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleDatepicker1"
                          value={estado}
                          onChange={(e) => setEstado(e.target.value)}
                          required
                        />
                        <label
                          htmlFor="exampleDatepicker1"
                          className="form-label"
                          minLength="2"
                          maxLength="2"
                        >
                          Estado
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline datepicker">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleDatepicker1"
                          value={rua}
                          onChange={(e) => setRua(e.target.value)}
                          required
                          minLength="6"
                        />
                        <label
                          htmlFor="exampleDatepicker1"
                          className="form-label"
                        >
                          Rua
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline datepicker">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleDatepicker1"
                          value={numero}
                          onChange={(e) => setNumero(e.target.value)}
                          required
                        />
                        <label
                          htmlFor="exampleDatepicker1"
                          className="form-label"
                        >
                          Numero
                        </label>
                      </div>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example1q"
                        className="form-control"
                        value={complemento}
                        onChange={(e) => setComplemento(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example1q">
                        Complemento
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success btn-lg mb-1"
                    onClick={(e) => cadastrar()} 
                  >
                    Submit
                  </button>
                </form>
                {(() => {
                  if (error !== 200 && error !== null) {
                    return (
                      <>
                        <div className="alert alert-danger mt-2" role="alert">
                          Erro ao cadastrar
                        </div>
                      </>
                    );
                  } else if (error !== null) {
                    return (
                      <>
                        <div className="alert alert-primary" role="alert">
                          Conta criada com sucesso
                        </div>
                      </>
                    );
                  }
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
