import { useEffect, useState } from 'react';

// API mockada em JSON, servida por HTTP pelo Vite e pela Vercel.
export default function useSinais() {
  const [sinais, setSinais] = useState([]);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(true);
  useEffect(() => {
    const controle = new AbortController();
    fetch('/api/sinais.json', { signal: controle.signal })
      .then(resposta => {
        if (!resposta.ok) throw new Error('Não foi possível carregar os sinais.');
        return resposta.json();
      })
      .then(setSinais)
      .catch(erro => { if (erro.name !== 'AbortError') setErro(erro.message); })
      .finally(() => { if (!controle.signal.aborted) setCarregando(false); });
    return () => controle.abort();
  }, []);
  return { sinais, erro, carregando };
}
