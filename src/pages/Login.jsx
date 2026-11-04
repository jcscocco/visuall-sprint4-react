import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ aoEntrar }) {
  const [erro, setErro] = useState('');
  const navegar = useNavigate();
  function entrar(evento) {
    evento.preventDefault();
    const dados = new FormData(evento.currentTarget);
    if (dados.get('email') === 'aluno@visuall.com' && dados.get('senha') === 'visuall123') {
      aoEntrar({ nome: 'Aluno VisuAll', email: dados.get('email') });
      navegar('/area');
    } else setErro('E-mail ou senha incorretos. Use os dados de demonstração abaixo.');
  }
  return <main className="max-w-lg mx-auto px-6 py-20 min-h-[65vh]">
    <h1 className="text-4xl mb-5">Minha área VisuAll</h1>
    <p className="text-zinc-400 mb-8">Login acadêmico demonstrativo para salvar seus sinais favoritos.</p>
    <form className="grid gap-5" onSubmit={entrar}>
      <label>E-mail<input type="email" className="campo-entrada" name="email" required autoComplete="username" /></label>
      <label>Senha<input type="password" className="campo-entrada" name="senha" required autoComplete="current-password" /></label>
      <button className="btn btn--primario">Entrar</button>
      <p role="alert">{erro}</p>
    </form>
    <p className="mt-6 text-sm text-amber-200">Teste: aluno@visuall.com / visuall123</p>
  </main>;
}
