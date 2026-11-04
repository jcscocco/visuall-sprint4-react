import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Avaliacao() {
  const [avaliacoes, salvar] = useLocalStorage('visuall-avaliacoes', []);
  const [mensagem, setMensagem] = useState('');
  function enviar(evento) {
    evento.preventDefault();
    const dados = new FormData(evento.currentTarget);
    salvar([...avaliacoes, { nome: dados.get('nome'), nota: Number(dados.get('nota')), texto: dados.get('texto') }]);
    setMensagem('Avaliação salva neste navegador. Obrigado!');
    evento.currentTarget.reset();
  }
  const media = avaliacoes.length ? Math.round(avaliacoes.reduce((soma, item) => soma + item.nota, 0) / avaliacoes.length * 10) / 10 : 0;
  return <div id="avaliar" className="my-10 rounded-2xl border border-zinc-700 p-6">
    <h3 className="text-2xl mb-4">Avalie o VisuAll</h3>
    <p className="mb-5 text-zinc-400">As avaliações ficam salvas somente neste navegador. Média local: {media}/5.</p>
    <form onSubmit={enviar} className="grid gap-4">
      <label>Nome<input className="campo-entrada" name="nome" required maxLength={80} /></label>
      <label>Nota<select className="campo-entrada" name="nota" defaultValue="5">{[1,2,3,4,5].map(nota => <option key={nota} value={nota}>{nota} de 5</option>)}</select></label>
      <label>Mensagem<textarea className="campo-entrada" name="texto" required maxLength={1000} /></label>
      <button className="btn btn--primario" type="submit">Salvar avaliação</button>
      <p role="status">{mensagem}</p>
    </form>
  </div>;
}
