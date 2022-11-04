import React, { useContext } from "react";
import ContentLoader from "react-content-loader";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { FooterPage } from "../../components/footer";
import { CartContext } from "../../context/cart";
import { ProdutoAPI } from "../../hooks/produtoAPI";
import { NotFound } from "../notFound";
import "./index.css";
import { ProdutoImg } from "./styles";

export const Produto = () => {
  const { handleAddItemToCart } = useContext(CartContext);

  const { id } = useParams();
  const { produtos, isFetching, error } = ProdutoAPI(`/${id}`);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <ContentLoader
            viewBox="0 0 450 400"
            backgroundColor="#838282"
            foregroundColor="#dedede"
          >
            <rect x="0" y="0" rx="0" ry="0" width="350" height="400" />
          </ContentLoader>
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <ContentLoader
            viewBox="0 0 450 400"
            backgroundColor="#838282"
            foregroundColor="#dedede"
          >
            <rect x="80" y="17" rx="4" ry="4" width="250" height="50" />
            <rect x="80" y="40" rx="3" ry="3" width="250" height="25" />
          </ContentLoader>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 content">
          <ProdutoImg
            className="img-fluid"
            src={produtos.fotoLink}
            alt={produtos.nome}
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">
            {produtos.nomeCategoria}
          </h4>
          <h1 className="display-5 fw-bolder">{produtos.nome}</h1>
          <p className="lead">
            Classificação: 5.0 <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">R$ {produtos.valor}</h3>
          <p className="lead">{produtos.descricao}</p>
          <button
            className="btn btn-outline-primary px-4 py-2"
            onClick={() =>
              handleAddItemToCart(
                produtos.id,
                produtos.fotoLink,
                produtos.nome,
                produtos.valor
              )
            }
          >
            Adicionar no carrinho
          </button>
          <NavLink to="/cart" className="btn ms-2 px-3 py-2 color-cart">
            Ir para o carrinho
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <>
      <div>
        <div className="container py-5">
          <div className="row py-4 justify-content-center">
            {(() => {
              if (isFetching) {
                return <Loading />;
              }
              if (error != null) {
                return <NotFound err={error.message} />;
              } else {
                return <ShowProduct />;
              }
            })()}
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
};
