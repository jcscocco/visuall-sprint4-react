import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Simulador() {
  const [palavra, setPalavra] = useState('Olá');
  const [ativo, setAtivo] = useState(false);
  const exemplos = ['Olá', 'Obrigado', 'Bom dia', 'Ajuda'];
  function simular() {
    setAtivo(true);
    setPalavra(exemplos[Math.floor(Math.random() * exemplos.length)]);
  }
  return <section id="explorar" className="secao">
    <div className="recipiente">
      <p className="secao-rotulo">01 · Explore o app</p>
      <h2 className="secao-titulo">Uma câmera que aproxima pessoas</h2>
      <div className="grid gap-8 md:grid-cols-2 items-center mt-8">
        <div className="rounded-3xl border border-amber-400/50 bg-zinc-950 p-8 text-center">
          <p className="text-amber-300 mb-8">VisuAll · Modo Libras</p>
          <div className="text-7xl my-8" aria-hidden="true">🤟</div>
          <p className="text-3xl mb-8" aria-live="polite">{ativo ? palavra : 'Pronto para começar'}</p>
          <button className="btn btn--primario" onClick={simular}>Simular tradução</button>
          <button className="block mx-auto mt-4 underline" onClick={() => setAtivo(false)}>Reiniciar</button>
        </div>
        <div className="space-y-5 text-zinc-300">
          <h3 className="text-2xl text-white">Experimente a proposta</h3>
          <p>O VisuAll propõe traduzir Libras na câmera do smartphone para facilitar a comunicação.</p>
          <p>Esta demonstração usa palavras de exemplo sorteadas. O reconhecimento real pertence ao aplicativo Android do projeto.</p>
          <Link className="btn btn--primario" to="/area">Ver sinais e salvar favoritos</Link>
        </div>
      </div>
    </div>
  </section>;
}
