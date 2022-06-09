import React, { useState } from "react";
import "./style.css";

export default function PaginaInicial() {
  const [numeroAleatorio, setNumeroAleatorio] = useState(1); // variavel stack hook

 function gerarNumero() {
    const novoNumero = Math.floor(Math.random() * (100-1) + 1);
    setNumeroAleatorio(novoNumero);
  
  }
  return (

    <div className="conteudo-centralizado">
      <h3>Número aleatório</h3>
      <h1>{numeroAleatorio}</h1>

      <div className="area-botao">
        <label>
        click no botão para gerar um número aleatório:
        </label>

        <button onClick={gerarNumero}>
        Gerar número</button>
      </div>

    </div>

  )
}
