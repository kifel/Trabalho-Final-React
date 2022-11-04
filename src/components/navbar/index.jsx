import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/cart";
import './index.css';
import { ColorName, ColorNav } from "./styles";

export const NavBar = () => {
  const { productsCart } = useContext(CartContext);
  return (
    <div>
      <ColorNav className="navbar navbar-expand-lg navbar-light py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4 text-white" to="/">
            TOP <ColorName>SECRET</ColorName>
          </NavLink>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link text-white" aria-current="page" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/produtos">
                  Produtos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/about">
                  Sobre
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/contato">
                  Fale conosco
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-primary text-white">
                <i className="fa fa-sign-in me-1 text-white"> Login</i>
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-primary ms-2 text-white">
                <i className="fa fa-shopping-cart me-1 text-white"> Carrinho ({productsCart.length})</i>
              </NavLink>
            </div>
          </div>
        </div>
      </ColorNav>
    </div>
  );
};
