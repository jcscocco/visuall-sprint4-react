export default function Cabecalho(){return (<header className="cabecalho">
        <a className="marca" href="/#inicio" aria-label="VisuAll, início">
            <img src="/images/logo-marca.webp" alt="" className="marca-logo" width="840" height="500" />
            <span className="marca-nome">VisuAll</span>
        </a>

        
        <input type="checkbox" id="abrir-menu" className="menu-check so-leitor" aria-label="Abrir e fechar o menu" />
        <label htmlFor="abrir-menu" className="menu-botao" aria-hidden="true">
            <span></span>
        </label>

        <nav className="navegacao" aria-label="Menu principal">
            <ul>
                <li><a href="/area">Minha área</a></li><li><a href="/#explorar">O app</a></li>
                <li><a href="/#solucao">Solução</a></li>
                <li><a href="/#funcionamento">Como funciona</a></li>
                <li><a href="/#tecnologia">Tecnologia</a></li>
                <li><a href="/#galeria">Vídeo</a></li>
                <li><a href="/#baixar">Baixar</a></li>
                <li><a href="/#equipe">Equipe</a></li>
            </ul>
        </nav>

        <a className="cabecalho-cta" href="/#contato">Falar com a equipe</a>
    </header>);}