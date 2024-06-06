import React, { useState } from 'react';
import './style.css';

function Exercicio3() {
  const carros = [
    { id: 1, marca: 'Toyota', modelo: 'Corolla' },
    { id: 2, marca: 'Honda', modelo: 'Civic' },
    { id: 3, marca: 'Ford', modelo: 'Mustang' },
    { id: 4, marca: 'Chevrolet', modelo: 'Camaro' },
    { id: 5, marca: 'Nissan', modelo: 'Altima' }
  ];

  const [marcaSelecionada, setMarcaSelecionada] = useState('');
  const [filtro, setFiltro] = useState('');

  const handleChange = (event) => {
    setMarcaSelecionada(event.target.value);
  };

  const marcasFiltradas = carros
    .map(carro => carro.marca)
    .filter((marca, index, self) => self.indexOf(marca) === index)
    .filter(marca => marca.toLowerCase().includes(filtro.toLowerCase()));

  const carrosFiltrados = carros.filter(carro => carro.marca === marcaSelecionada);

  return (
    <div>
      <h3>Selecione a marca:</h3>
      <select className="form-select" aria-label="Seletor de Marcas" onChange={handleChange}>
        <option value="">Selecione uma opção</option>
        {marcasFiltradas.map((marca, index) => (
          <option key={index} value={marca}>{marca}</option>
        ))}
      </select>

      {marcaSelecionada && (
        <div>
          <h4>Carros da marca {marcaSelecionada}:</h4>
          <ul>
            {carrosFiltrados.map(carro => (
              <li key={carro.id}>{carro.modelo}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Exercicio3;
