import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/cart";
import "./index.css";

export const Cart = () => {
  const [cupom, setCupom] = useState("");
  let totalPrice = 0;
  let desconto = 0;
  let valorComDesconto = 0;

  const {
    productsCart,
    clearCart,
    handleAddItemToCart,
    handleRemoveItemToCart,
    removalItem,
  } = useContext(CartContext);

  return (
    <section className="h-100 h-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2">
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">
                          Seu carrinho de compras
                        </h1>
                      </div>
                      <hr className="my-4" />
                      {productsCart.length === 0 && (
                        <h1 className="fw-bold mb-0 text-black">
                          Carrinho sem produtos
                        </h1>
                      )}

                      {productsCart?.map((prod) => {
                        const subTotal = prod.valor * prod.quantidade;
                        totalPrice += subTotal;
                        if (cupom.toUpperCase() === "BITI-20") {
                          desconto = totalPrice * (20 / 100);
                          valorComDesconto = totalPrice - desconto;
                        }
                        return (
                          <div
                            className="row mb-4 d-flex justify-content-between align-items-center"
                            key={prod.id}
                          >
                            <div className="col-md-2 col-lg-2 col-xl-2">
                              <img
                                src={prod.fotoLink}
                                className="img-fluid rounded-3"
                                alt={prod.nome}
                              />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                              <h6 className="text-black mb-0">{prod.nome}</h6>
                              <h6 className="mb-0 text-muted">
                                Quantidade: {prod.quantidade}
                              </h6>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                              <button
                                className="btn btn-link px-2"
                                onClick={() => handleRemoveItemToCart(prod.id)}
                              >
                                <i className="fa fa-minus"></i>
                              </button>

                              <input
                                id="form1"
                                min="0"
                                name="quantity"
                                defaultValue="1"
                                type="number"
                                disabled
                                className="form-control form-control-sm"
                              />

                              <button
                                className="btn btn-link px-2"
                                onClick={() =>
                                  handleAddItemToCart(
                                    prod.id,
                                    prod.fotoLink,
                                    prod.nome,
                                    prod.valor
                                  )
                                }
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h6 className="mb-0">R$ {subTotal.toFixed(2)}</h6>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                              <button
                                className="btn btn-link"
                                onClick={() => removalItem(prod.id)}
                              >
                                <i className="fa fa-times"></i>
                              </button>
                            </div>

                            <hr className="my-5" />
                          </div>
                        );
                      })}

                      <div className="pt-5">
                        <h6 className="mb-0">
                          <NavLink to="/" className="text-body">
                            <i className="fa fa-arrow-left me-2"></i>Voltar para
                            a loja
                          </NavLink>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Resumo</h3>
                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">
                          itens {productsCart.length}
                        </h5>
                        <p>R$ {totalPrice.toFixed(2)}</p>
                      </div>

                      <h5 className="text-uppercase mb-3">Cupom de desconto</h5>

                      <div className="mb-5">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Examplea2"
                            className="form-control form-control-lg"
                            value={cupom}
                            onChange={(e) => setCupom(e.target.value)}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Examplea2"
                          >
                            Digite o seu código
                          </label>
                          {(() => {
                            if (cupom.toUpperCase() === "BITI-20") {
                              return (
                                <div class="alert alert-info" role="alert">
                                  CUPOM "BITI-20" APLICADO COM SUCESSO, VOCÊ
                                  ECONOMIZOU R$ {desconto.toFixed(2)}.
                                </div>
                              );
                            }
                          })()}
                        </div>
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Preço total</h5>
                        {(() => {
                          if (cupom.toUpperCase() === "BITI-20") {
                            return <h5>R$ {valorComDesconto.toFixed(2)}</h5>;
                          } else {
                            return <h5>R$ {totalPrice.toFixed(2)}</h5>;
                          }
                        })()}
                      </div>

                      <button
                        type="button"
                        className="btn btn-dark btn-block btn-lg"
                        data-mdb-ripple-color="dark"
                        onClick={clearCart}
                      >
                        Limpar carrinho
                      </button>

                      <button
                        type="button"
                        className="btn btn-dark btn-block btn-lg ms-2"
                        data-mdb-ripple-color="dark"
                      >
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
