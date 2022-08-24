import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css"
import './index.css';
import Inicio from 'pages/Inicio';
import Cardapio from 'pages/Cardapio';
import Router from "./routes"

const componenteAtual = window.location.pathname === "/" ? <Inicio /> : <Cardapio />

ReactDOM.render(
  <React.StrictMode>
    <>
      <Router />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
