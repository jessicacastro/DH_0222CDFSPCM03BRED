import React, { useEffect, useState } from "react";
import "./PostList.css";

import api from "../../services/api";

// Componentes de estado usam Hooks para gerenciar o ciclo de vida, componentes de classe usam funções pré definidas do React.

export function PostList() {
  const [contador, setContador] = useState(0);
  const [piadaChuckNorris, setPiadaChuckNorris] = useState("");

  useEffect(() => {
    api.get("/random").then((response) => {
      setPiadaChuckNorris(response.data.value);
    });
  }, []);

  function increment() {
    const novoValor = contador + 1;
    setContador(novoValor);
  }

  function decrement() {
    const novoValor = contador - 1;
    if (novoValor < 0) return;
    setContador(novoValor);
  }

  return (
    <>
      <div className="container">
        <button onClick={() => increment()}>+</button>
        <h1>{contador}</h1>
        <button onClick={() => decrement()}>-</button>
      </div>

      <div className="container">
        <h2>{piadaChuckNorris}</h2>
      </div>
    </>
  );
}
