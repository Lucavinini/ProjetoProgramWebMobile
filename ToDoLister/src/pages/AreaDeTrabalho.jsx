import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AreaDeTrabalho.css';

const AreaDeTrabalho = () => {
  const [blocos, setBlocos] = useState([
    { id: 1, texto: '', cor: '#ddd' },
    { id: 2, texto: '', cor: '#922047' },
    { id: 3, texto: '', cor: '#00ff99' },
  ]);

  const [info, setInfo] = useState('Carregando data...');
  const navigate = useNavigate();

  useEffect(() => {
    const buscarDataHora = async () => {
      try {
        const response = await fetch('https://worldtimeapi.org/api/timezone/America/Sao_Paulo');
        if (!response.ok) throw new Error('Erro na resposta da API');
        const data = await response.json();
        const dataHora = new Date(data.datetime);
        const dataFormatada = dataHora.toLocaleDateString('pt-BR', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        const horaFormatada = dataHora.toLocaleTimeString('pt-BR');
        setInfo(`${dataFormatada} - ${horaFormatada}`);
      } catch (error) {
        console.error('Erro ao buscar data/hora:', error);
        setInfo('Não foi possível carregar a data e hora agora.');
      }
    };

    buscarDataHora();
  }, []);

  const adicionarBloco = () => {
    const novoBloco = {
      id: Date.now(),
      texto: '',
      cor: '#dddddd'
    };
    setBlocos([...blocos, novoBloco]);
  };

  const removerBloco = (id) => {
    setBlocos(blocos.filter(bloco => bloco.id !== id));
  };

  const editarTexto = (id, novoTexto) => {
    setBlocos(blocos.map(bloco =>
      bloco.id === id ? { ...bloco, texto: novoTexto } : bloco
    ));
  };

  return (
    <div className="area-container">
      <header className="top-bar">
        <span className="info">{info}</span>
        <button className="exit-btn" onClick={() => navigate('/')}>Saída</button>
      </header>

      <div className="blocos-wrapper">
        {blocos.map((bloco) => (
          <div key={bloco.id} className="bloco" style={{ backgroundColor: bloco.cor }}>
            <textarea
              className="bloco-textarea"
              value={bloco.texto}
              onChange={(e) => editarTexto(bloco.id, e.target.value)}
              placeholder="Digite aqui..."
            />
            <button className="remover" onClick={() => removerBloco(bloco.id)}>×</button>
          </div>
        ))}
        <button className="adicionar" onClick={adicionarBloco}>+</button>
      </div>
    </div>
  );
};

export default AreaDeTrabalho;
