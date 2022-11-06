import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL: "https://kifel.herokuapp.com/cliente",
});

export function ClienteAPI(url) {
  const [isFetching, setIsFetching] = useState(true);
  const [clientes, setClientes] = useState([]);
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

  return { clientes, isFetching, error };
}
