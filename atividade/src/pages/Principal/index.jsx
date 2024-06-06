import React from 'react'
import './style.css'

function Principal() {
  return (
    <div className='principal'>
      <h1>Atividade 1 - React</h1>
      <h2>Grupo 5</h2>
      <hr/>
      <h3>Utilize a barra de navegação para conferir cada exercício!</h3>
      <hr/>
      <hr/>
      <h2>Integrantes:</h2>
      <ul className='lista'>
        <li>Higor</li>
        <li>Filipe Lomba</li>
        <li>Paulo Henrique</li>
        <li>Nicolas de Souza</li>
        <li>Thiago Samuel</li>
        <li>Matheus Olivieri</li>
      </ul>
    </div>
  );
}

export default Principal;