import React from "react";

export const NotFound = ({ err }) => {
  return (
    <>
      <p>Ops... algo deu errado</p>
      <p>{err}</p>
      <p>
        Página não encontrada.
      </p>
    </>
  );
};
