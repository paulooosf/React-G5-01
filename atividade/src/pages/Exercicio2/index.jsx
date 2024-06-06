import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './style.css'

function Exercicio2() {
  const [usuarios, setUsuarios] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://665fa6f55425580055b05a8d.mockapi.io/pessoas')
      .then(response => {
        setUsuarios(response.data);
      })
      .catch(error => console.error('Erro ao fazer requisição'));
  },[]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchId) {
      axios.get(`https://665fa6f55425580055b05a8d.mockapi.io/pessoas/${searchId}`)
        .then(response => {
          setUsuarios([response.data]);
          setError(null);
        })
        .catch(error => {
          console.error('Erro ao buscar usuário por ID', error);
          setError('ID Inválido');
          setUsuarios([]);
        });
    }
  };
 
  return (
    <div className='barra'>
      <h2>Pesquisar Usuários por id</h2>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">    
          <form class="form-inline my-2 my-lg-0" onSubmit={handleSearch}>
            <input class="form-control mr-sm-2" type="search" placeholder="Digite o ID" aria-label="Pesquisar" value={searchId}
              onChange={(e) => setSearchId(e.target.value)}/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
          </form>
        </div>
      </nav>

    <h2>Dados do Usuário:</h2>

    {error && <p>{error}</p>}

      <ul>
        {usuarios.map(usuario=>(
          <li key={usuario.id}>Nome: {usuario.nome};   Email: {usuario.email};   CPF: {usuario.cpf};</li>
        ))}
      </ul>
    </div>
  );

}

export default Exercicio2;