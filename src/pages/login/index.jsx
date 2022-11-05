import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FooterPage } from '../../components/footer';
import { Form, H3, Imagem } from "./styles";

export const Login = () => {
  const [login, setLogin] = useState(false);

  return (
    <>
      <section className="h-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <Form>
                  <H3 className="fw-normal mb-3 pb-3">Log in</H3>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form2Example18"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form2Example18">
                      Email address
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form2Example28"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form2Example28">
                      Password
                    </label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button
                      className="btn btn-info btn-lg btn-block"
                      type="button"
                      onClick={() => {
                        setLogin(true);
                      }}
                    >
                      Login
                    </button>
                  </div>

                  {login ? (
                    <div className="alert alert-danger" role="alert">
                      Sistemas de login fora da Ar, API sem JWT
                    </div>
                  ) : null}

                  <p className="small mb-5 pb-lg-2">
                    <a className="text-muted">Forgot password?</a>
                  </p>
                  <p>
                    Não tem uma conta?{" "}
                    <NavLink to="/register" className="link-info">
                      Registre-se aqui
                    </NavLink>
                  </p>
                </Form>
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <Imagem
                src="http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg"
                alt="Login image"
                className="w-100 vh-100"
              />
            </div>
          </div>
        </div>
      </section>
      <FooterPage />
    </>
  );
};
