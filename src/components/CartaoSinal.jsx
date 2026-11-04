export default function CartaoSinal({ sinal, favorito, aoFavoritar }) {
  return <article className="flex flex-col items-start rounded-2xl border border-zinc-700 bg-zinc-950 p-6">
    <h2 className="text-2xl text-amber-300 mb-3">{sinal.titulo}</h2>
    <p className="text-zinc-300 mb-5">{sinal.descricao}</p>
    <button className="btn btn--primario mt-auto" aria-pressed={favorito} onClick={() => aoFavoritar(sinal.id)}>{favorito ? 'Remover favorito' : 'Salvar favorito'}</button>
  </article>;
}
