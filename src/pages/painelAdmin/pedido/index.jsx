import axios from "axios";
import React, { useState } from "react";
import ContentLoader from "react-content-loader";
import { APIResponse } from "../../../hooks/APIResponse";
import { NotFound } from "../../notFound";
import { NavLink } from "../cliente/styles";

export const PedidoGen = () => {
  let status = ""
  const { data, isFetching, error } = APIResponse("/pedido");
  const [errorS, setErrorS] = useState(null);
  const [response, setResponse] = useState(null);

  const deletarCliente = (id) => {
    axios
      .delete(`https://kifel.herokuapp.com/pedido/${id}`)
      .then((response) => {
        setResponse(response.status);
      })
      .catch((error) => {
        setErrorS(error);
      })
      .finally(() => {
        refresh();
      });
  };

  const refresh = () => {
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
        {data?.map((func) => {
          if(func.pedidoStatus === "AGUARDANDO_PAGAMENTO") {
            status = "PAG-PEN..."
          }else {
            status = func.pedidoStatus
          }
          return (
            <div className="col-md-12 mb-4 col-lg-12 col-xl-4" key={func.id}>
              <div className="card text-center card-item" width="18rem">
                <div className="card-body">
                  <p className="card-text lead">ID: {func.id}</p>
                  <h5 className="card-title text-dark mb-0">
                    Cliente: {func.nomeCliente.substring(0, 8)}...
                  </h5>
                  <p className="card-text lead">Status: {status}</p>
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
          <div className="container mb-5">
            <div className="row">
              <div className="col-6">
                <NavLink to="/admin" className="text-body btn">
                  <i className="fa fa-arrow-left me-2"></i>Voltar
                </NavLink>
              </div>
            </div>
          </div>
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
