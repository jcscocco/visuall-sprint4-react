import { useState } from 'react';

// Compartilha a lógica de persistência entre login, favoritos e avaliações.
export default function useLocalStorage(chave, inicial) {
  const [valor, setValor] = useState(() => {
    try { return JSON.parse(localStorage.getItem(chave)) ?? inicial; }
    catch { return inicial; }
  });
  function salvar(novoValor) {
    setValor(novoValor);
    localStorage.setItem(chave, JSON.stringify(novoValor));
  }
  return [valor, salvar];
}
