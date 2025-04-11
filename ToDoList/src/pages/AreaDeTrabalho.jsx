import React, { useState } from 'react';
import './AreaDeTrabalho.css';

const AreaDeTrabalho = () => {
  const [blocos, setBlocos] = useState([
    { id: 1, texto: '', cor: '#ddd' },
    { id: 2, texto: '', cor: '#922047' },
    { id: 3, texto: '', cor: '#00ff99' },
  ]);

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
        <span>Espaço para API de CLIMA</span>
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
