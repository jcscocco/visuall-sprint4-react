export default function Rodape(){return (<footer className="rodape">
        <div className="rodape-grade">
            <div className="rodape-marca">
                <a href="/#inicio" aria-label="VisuAll, voltar ao início">
                    <img src="/images/logo-completa.webp" alt="VisuAll" className="rodape-logo" width="480" height="440" loading="lazy" />
                </a>
                <p>
                    Reconhecimento de Libras em tempo real dentro do aplicativo de câmera
                    do smartphone. Projeto acadêmico desenvolvido por estudantes de
                    Engenharia de Software da FIAP.
                </p>
            </div>

            <nav className="rodape-coluna" aria-labelledby="rodape-projeto">
                <h2 id="rodape-projeto">Projeto</h2>
                <ul>
                    <li><a href="/#explorar">Explore o app</a></li>
                    <li><a href="/#solucao">Solução</a></li>
                    <li><a href="/#funcionamento">Funcionamento</a></li>
                    <li><a href="/#publico">Público-alvo</a></li>
                    <li><a href="/#tecnologia">Tecnologia</a></li>
                    <li><a href="/#baixar">Baixar o app</a></li>
                    <li><a href="/#avaliar">Avaliar o projeto</a></li>
                </ul>
            </nav>

            <nav className="rodape-coluna" aria-labelledby="rodape-equipe">
                <h2 id="rodape-equipe">Equipe</h2>
                <ul>
                    <li><a href="/#equipe">Integrantes</a></li>
                    <li><a href="/#galeria">Demonstração</a></li>
                    <li><a href="https://www.youtube.com/@VisuAll2K26" target="_blank" rel="noopener">YouTube</a></li>
                    <li><a href="https://www.tiktok.com/@visuall2k26" target="_blank" rel="noopener">TikTok</a></li>
                    <li><a href="/#contato">Contato</a></li>
                    <li><a href="mailto:visuall2k26@gmail.com">visuall2k26@gmail.com</a></li>
                </ul>
            </nav>
        </div>

        <div className="rodape-base">
            <p>VisuAll © 2026</p>
            <p>FIAP · Engenharia de Software</p>
        </div>
    </footer>);}