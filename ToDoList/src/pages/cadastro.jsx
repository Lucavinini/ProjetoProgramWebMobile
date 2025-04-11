import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./LoginPage.css";

const CadastroPage = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (usuario && senha) {
      alert("Usuário cadastrado!");
      navigate('/AreaDeTrabalho');
    } else {
      alert('Preencha todos os campos!');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-box">
        <input
          type="text"
          placeholder="User"
          className="login-input"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          className="login-input"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit" className="login-button">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default CadastroPage;
