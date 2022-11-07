import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL: "https://kifel.herokuapp.com",
});

export function APIResponse(url) {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setProdutos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return { data, isFetching, error };
}
