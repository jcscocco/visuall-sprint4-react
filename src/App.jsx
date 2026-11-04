import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import Icones from './components/Icones';
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import Area from './pages/Area';

// Proteção demonstrativa no front-end; não substitui autenticação de servidor.
function RotaPrivada({ usuario, children }) {
  return usuario ? children : <Navigate to="/login" replace />;
}
export default function App() {
  const [usuario, salvarUsuario] = useLocalStorage('visuall-usuario', null);
  return <BrowserRouter>
    <Icones /><Cabecalho />
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<Login aoEntrar={salvarUsuario} />} />
      <Route path="/area" element={<RotaPrivada usuario={usuario}><Area usuario={usuario} aoSair={() => salvarUsuario(null)} /></RotaPrivada>} />
      <Route path="*" element={<main className="p-20"><h1>Página não encontrada</h1><Link to="/">Voltar ao início</Link></main>} />
    </Routes>
    <Rodape />
  </BrowserRouter>;
}
