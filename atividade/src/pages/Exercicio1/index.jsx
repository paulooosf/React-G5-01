import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

function Exercicio1() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [pessoas, setPessoas] = useState([]);
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newPost = {
                nome,
                email,
                cpf
            };

            const response = await axios.post('https://665fa6f55425580055b05a8d.mockapi.io/pessoas', newPost);
            setPessoas([...pessoas, response.data]);
            setEnviado(true);
        } catch (error) {
            console.log("Requisição com problemas", error);
        }
    };

useEffect(() => {
        const fetchPessoas = async () => {
            const response = await axios.get('https://665fa6f55425580055b05a8d.mockapi.io/pessoas');
            setPessoas(response.data);
        };

        if (enviado) {
            fetchPessoas();
        }
    }, [enviado]);

    return (
        <div className='container'>
            <h1>Cadastro de Pessoas</h1>
            {pessoas.length > 0 && (
                <ul className="list-group my-3">
                    {pessoas.map((pessoa) => (
                        <li key={pessoa.id} className="list-group-item">
                            Nome: {pessoa.nome} - Email: {pessoa.email} - CPF: {pessoa.cpf}
                        </li>
                    ))}
                </ul>
            )}
            {!enviado && (
                <form onSubmit={handleSubmit}>
                    <div className="informacoes">
                        <div className="col-md-6">
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" className="my-3 form-control" id="nome" value={nome} onChange={(e) => setNome(e.target.value)}
                                required />
                            <label htmlFor="email">Email:</label>
                            <input type="text" className="my-3 form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                required />
                            <label htmlFor="cpf">CPF:</label>
                            <input type="text" className="my-3 form-control" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)}
                                required />
                            <button type="submit" className="btn btn-primary">Cadastrar</button>
                        </div>
                    </div>
                </form>
            )}
            {enviado && (
                <div className="alert alert-primary" role="alert">Enviado com sucesso</div>
            )}
        </div>
    );
}

export default Exercicio1;