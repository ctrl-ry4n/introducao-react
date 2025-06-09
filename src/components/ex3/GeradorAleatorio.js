'use client';
import { useState } from 'react';

import Styles from '../../styles/GeradorAleatorio.module.css';
function GeradorAleatorio() {
  const [numeroAleatorio, setNumeroAleatorio] = useState(0);

  function gerar() {
    const numeroGerado = Math.floor(Math.random() * (100 - 1) +1 );
    setNumeroAleatorio(numeroGerado)

  }
  return (
    <div className={Styles.geradorAleatorio}>
        <h1>Gerador de numero aleatório</h1>
        <h2>{numeroAleatorio}</h2>
        <p>Clique no botão abaixo para gerar um número</p>
        <button onClick={gerar}>Gerar número</button>
    </div>
  );
}
export default GeradorAleatorio;
