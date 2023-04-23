import { useTransition, useState } from "react";

export default function useData(endpoint) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState();

  const fetchData = () => {
    return new Promise((resolve, reject) => {
     startTransition(() => fetch(endpoint)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => {
          setError(err);
          reject(err);
        }));
    });
  };

  return { fetchData, error, isPending };
}