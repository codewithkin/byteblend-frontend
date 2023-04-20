/* import { useEffect, useState } from "react";

export default function useData( endpoint ) {
    const [info, setInfo] = useState();
    const [error, setError] = useState();

    useEffect(() => {
      fetch(endpoint)
      .then(response => response.json())
      .then((data) =>  { setInfo(data)})
      .catch((err) => setError(err));
    }, [ ]);

    return { info, setInfo, error }
} */

import { useState } from "react";

export default function useData(endpoint) {
  const [error, setError] = useState();

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      fetch(endpoint)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => {
          setError(err);
          reject(err);
        });
    });
  };

  return { fetchData, error };
}