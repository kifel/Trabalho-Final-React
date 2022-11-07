import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL: "https://kifel.herokuapp.com/funcionario",
});

export function FuncionarioAPI(url) {
  const [isFetching, setIsFetching] = useState(true);
  const [funcionario, setClientes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        setClientes(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return { funcionario, isFetching, error };
}
