import { useState } from 'react';
import useSinais from '../hooks/useSinais';
import useLocalStorage from '../hooks/useLocalStorage';
import CartaoSinal from '../components/CartaoSinal';

export default function Area({ usuario, aoSair }) {
  const { sinais, erro, carregando } = useSinais();
  const [favoritos, salvarFavoritos] = useLocalStorage('visuall-favoritos', []);
  const [busca, setBusca] = useState('');
  const [somenteFavoritos, setSomenteFavoritos] = useState(false);
  function favoritar(id) {
    salvarFavoritos(favoritos.includes(id) ? favoritos.filter(item => item !== id) : [...favoritos, id]);
  }
  const filtrados = sinais.filter(sinal => sinal.titulo.toLowerCase().includes(busca.toLowerCase()) && (!somenteFavoritos || favoritos.includes(sinal.id)));
  return <main className="max-w-6xl mx-auto px-6 py-16 min-h-[65vh]">
    <div className="flex flex-wrap justify-between gap-4 mb-8">
      <div><p className="text-amber-300 mb-2">Olá, {usuario.nome}</p><h1 className="text-4xl">Seus sinais favoritos</h1></div>
      <button className="underline" onClick={aoSair}>Sair</button>
    </div>
    <p className="text-zinc-400 mb-6">Glossário de palavras de exemplo do projeto. Os favoritos ficam salvos neste navegador.</p>
    <div className="flex flex-wrap gap-5 items-center mb-8">
      <label className="flex-1">Buscar sinal<input className="campo-entrada" value={busca} onChange={e => setBusca(e.target.value)} placeholder="Ex.: Olá" /></label>
      <label><input type="checkbox" checked={somenteFavoritos} onChange={e => setSomenteFavoritos(e.target.checked)} /> Somente favoritos</label>
    </div>
    {carregando && <p role="status">Carregando sinais...</p>}
    {erro && <p role="alert">{erro}</p>}
    {!carregando && !erro && !filtrados.length && <p>Nenhum sinal encontrado.</p>}
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtrados.map(sinal => <CartaoSinal key={sinal.id} sinal={sinal} favorito={favoritos.includes(sinal.id)} aoFavoritar={favoritar} />)}</div>
  </main>;
}
