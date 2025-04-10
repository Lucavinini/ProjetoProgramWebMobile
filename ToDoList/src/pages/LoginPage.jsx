import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Aqui depois você coloca a verificação com backend
    if (usuario && senha) {
      // Exemplo: se login der certo, redireciona
      navigate('/AreaDeTrabalho');
    } else {
      alert('Preencha todos os campos!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <form
        onSubmit={handleLogin}
        className="bg-slate-800 p-6 rounded-xl shadow-md w-80 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <input
          type="text"
          placeholder="Usuário"
          className="w-full p-2 rounded text-black"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full p-2 rounded text-black"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded font-semibold"
        >
          Entrar
        </button>

        <p className="text-center text-sm">
          Não tem conta?{' '}
          <Link to="/cadastro" className="text-blue-400 hover:underline">
            Cadastre-se
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
