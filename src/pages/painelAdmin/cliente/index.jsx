import axios from "axios";
import React, { useState } from "react";
import ContentLoader from "react-content-loader";
import { ClienteAPI } from "../../../hooks/clienteAPI";
import { NotFound } from "../../notFound";
import { NavLink, TrashButton } from "./styles";

export const Cliente = () => {
  const { clientes, isFetching, error } = ClienteAPI();
  const [clienteResponse, setClienteResponse] = useState(clientes);
  const [errorS, setErrorS] = useState(null);
  const [response, setResponse] = useState(null);

  const deletarCliente = (id) => {
    axios
      .delete(`https://kifel.herokuapp.com/cliente/${id}`)
      .then((response) => {
        setResponse(response.status);
      })
      .catch((error) => {
        setErrorS(error);
      });

    window.location.reload();
  };

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <ContentLoader
            height={350}
            width={200}
            viewBox="0 0 450 400"
            backgroundColor="#838282"
            foregroundColor="#dedede"
          >
            <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
            <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
            <rect x="42" y="77" rx="10" ry="10" width="388" height="500" />
          </ContentLoader>
        </div>
        <div className="col-md-3">
          <ContentLoader
            height={350}
            width={200}
            viewBox="0 0 450 400"
            backgroundColor="#838282"
            foregroundColor="#dedede"
          >
            <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
            <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
            <rect x="42" y="77" rx="10" ry="10" width="388" height="500" />
          </ContentLoader>
        </div>
        <div className="col-md-3">
          <ContentLoader
            height={350}
            width={200}
            viewBox="0 0 450 400"
            backgroundColor="#838282"
            foregroundColor="#dedede"
          >
            <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
            <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
            <rect x="42" y="77" rx="10" ry="10" width="388" height="500" />
          </ContentLoader>
        </div>
        <div className="col-md-3">
          <ContentLoader
            height={350}
            width={200}
            viewBox="0 0 450 400"
            backgroundColor="#838282"
            foregroundColor="#dedede"
          >
            <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
            <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
            <rect x="42" y="77" rx="10" ry="10" width="388" height="500" />
          </ContentLoader>
        </div>
      </>
    );
  };

  const ShowClients = () => {
    return (
      <>
        {clientes?.map((clt) => {
          return (
            <div className="col-md-3 mb-4" key={clt.id}>
              <div className="card text-center card-item" width="18rem">
                <div className="card-body">
                  <p className="card-text lead">ID: {clt.id}</p>
                  <h5 className="card-title text-dark mb-0">
                    Nome: {clt.nome.substring(0, 12)}...
                  </h5>
                  <p className="card-text lead">
                    User: {clt.usuario.substring(0, 12)}
                  </p>
                  <p className="card-text lead">Cpf: {clt.cpf}</p>
                  <p className="card-text lead">
                    Email: {clt.email.substring(0, 12)}
                  </p>
                  <NavLink
                    className="btn"
                    to={`/clientes-gen/editar/${clt.id}`}
                  >
                    <i className="fa fa-pencil me-5"></i>
                  </NavLink>
                  <TrashButton
                    className="btn"
                    onClick={() => deletarCliente(clt.id)}
                  >
                    <i className="fa fa-trash"></i>
                  </TrashButton>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <NavLink to="/admin" className="text-body">
            <i className="fa fa-arrow-left me-2 mb-5"></i>Voltar
          </NavLink>
          {(() => {
            if (isFetching) {
              return <Loading />;
            }
            if (error != null) {
              return <NotFound err={error.message} />;
            } else {
              return <ShowClients />;
            }
          })()}
        </div>
      </div>
    </>
  );
};
