import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import { NavLink, useLocation } from "react-router-dom";
import { FooterPage } from "../../components/footer";
import { APIResponse } from "../../hooks/APIResponse";
import { NotFound } from "../notFound";
import "./index.css";
import { ImagemProduto } from "./styles";

export const Produtos = () => {
  const [url, setUrl] = useState("");
  const location = useLocation();
  const [ProdutoFiltrado, setProdutoFiltrado] = useState("");
  const { data, isFetching, error } = APIResponse("/produto");

  useEffect(() => {
    setUrl(urlLink(location.pathname));
  }, [location]);

  const urlLink = (url) => {
    if (!url == "/produtos") {
      return `/`;
    }
    return `/produtos`;
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

  const ShowProducts = () => {
    const produtosFiltrados = data?.filter((produto) =>
      produto.nome.toUpperCase().includes(ProdutoFiltrado.toUpperCase())
    );
    return (
      <>
        {produtosFiltrados?.map((prod) => {
          return (
            <div className="col-md-3 mb-4" key={prod.id}>
              <div className="card text-center card-item" width="18rem">
                <ImagemProduto src={prod.fotoLink} alt={prod.nome} />
                <div className="card-body">
                  <h5 className="card-title text-dark mb-0">
                    {prod.nome.substring(0, 12)}...
                  </h5>
                  <p className="card-text lead fw-bold">R${prod.valor}</p>
                  <NavLink
                    to={`${url}/${prod.id}`}
                    className="btn btn-outline-primary"
                  >
                    Detalhes
                  </NavLink>
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
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Produtos Disponíveis</h1>
            <input
              className="form-control mt-5"
              value={ProdutoFiltrado}
              onChange={(e) => setProdutoFiltrado(e.target.value)}
              type="text"
              placeholder="Digite o nome do produto"
            />
          </div>
          <div className="row justify-content-center">
            {(() => {
              if (isFetching) {
                return <Loading />;
              }
              if (error != null) {
                return <NotFound err={error.message} />;
              } else {
                return <ShowProducts />;
              }
            })()}
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
};
