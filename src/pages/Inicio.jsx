import Simulador from '../components/Simulador';
import Avaliacao from '../components/Avaliacao';
export default function Inicio(){return (<main id="conteudo">

        
        <section className="hero" id="inicio">
            <div className="hero-conteudo">
                <p className="hero-selo">Projeto acadêmico · 2026</p>

                <h1>Libras em tempo real, <em>na câmera que você já tem</em></h1>

                
                <p className="hero-lead">
                    <span className="so-desktop">O VisuAll é um modo Libras dentro do próprio aplicativo de câmera do
                    smartphone. Aponte, sinalize e a tradução aparece na tela,
                    sem instalar nada extra e sem precisar de internet.</span>
                    <span className="so-celular">Um modo Libras dentro da câmera do seu celular.
                    Aponte, sinalize e leia a tradução, sem internet.</span>
                </p>

                <div className="hero-acoes">
                    <a className="btn btn--primario" href="#explorar">Explorar o app</a>
                    <a className="btn btn--secundario" href="#galeria">Assistir ao vídeo</a>
                </div>
            </div>

            
            <div className="hero-visual">
                
                <canvas className="constelacao" aria-hidden="true"></canvas>

                <div className="hero-objeto" aria-hidden="true">
                    <img src="/images/logo-marca.webp" alt="" className="objeto-logo" width="840" height="500" />
                </div>

                
                <a className="hero-aparelho" href="#explorar" aria-label="Explorar as telas do aplicativo">
                    <span className="app app--miniatura" data-tela="camera" aria-hidden="true">
                        <span className="app-status"><span>22:50</span><span className="app-bateria">78</span></span>
                        <span className="app-tela app-camera">
                            <span className="cam-topo">
                                <span className="cam-flash"><svg><use href="#i-flash"></use></svg><b>A</b></span>
                                <span className="cam-pilulas">
                                    <span className="app-pilula">4:3</span>
                                    <span className="app-pilula">OFF</span>
                                    <span className="app-pilula"><svg><use href="#i-grade"></use></svg></span>
                                </span>
                                <span className="app-redondo app-redondo--forte app-convite"><svg><use href="#i-pessoa"></use></svg></span>
                            </span>
                            <span className="cam-area">
                                <span className="cam-visor">
                                    <img className="cam-cena" src="/images/logo-marca.webp" alt="" width="840" height="500" />
                                    <span className="cam-etiqueta">FOTO</span>
                                    <span className="cam-zoom"><span>0.6x</span><span className="ativo">1x</span><span>2x</span><span>5x</span></span>
                                </span>
                            </span>
                            <span className="cam-modos"><span className="ativo">FOTO</span><span>VÍDEO</span><span>PRO</span></span>
                            <span className="cam-base">
                                <span className="cam-galeria"><svg><use href="#i-imagem"></use></svg></span>
                                <span className="cam-disparo"></span>
                                <span className="app-redondo"><svg><use href="#i-girar"></use></svg></span>
                            </span>
                        </span>
                        <span className="app-barra"></span>
                    </span>
                </a>
            </div>

            <dl className="hero-metricas">
                <div className="metrica">
                    <dt>10 mi+</dt>
                    <dd>brasileiros com algum grau de deficiência auditiva</dd>
                </div>
                <div className="metrica">
                    <dt>100%</dt>
                    <dd>do processamento acontece no próprio aparelho</dd>
                </div>
                <div className="metrica">
                    <dt>0</dt>
                    <dd>downloads extras: já vive no app de câmera</dd>
                </div>
            </dl>
        </section>

        
        <Simulador /><section className="secao" id="solucao">
            <div className="recipiente">
                <div className="secao-cabecalho revela">
                    <p className="secao-rotulo">02 · O ponto de partida</p>
                    <h2 className="secao-titulo">Uma conversa que simplesmente não acontece</h2>
                    <svg className="secao-objeto secao-icone" viewBox="0 0 64 64" aria-hidden="true"><use href="#s-partida"></use></svg>
                    <p className="secao-lead">
                        Antes de escrever uma linha de código, fomos atrás da pergunta certa.
                    </p>
                </div>

                <div className="grade-solucao revela">
                    <article className="cartao">
                        <span className="cartao-numero">problema</span>
                        <h3>O que nos fez pensar?</h3>
                        <p>A conversa com quem não sinaliza ainda trava.</p>
                        <ul className="cartao-lista">
                            <li>Mais de 10 milhões de brasileiros têm deficiência auditiva</li>
                            <li>A Libras é a língua materna de boa parte deles</li>
                            <li>Sem intérprete, sobra papel ou celular digitado</li>
                        </ul>
                    </article>

                    <article className="cartao cartao--resposta">
                        <span className="cartao-numero">solução</span>
                        <h3>O que construímos?</h3>
                        <p>E se a câmera que já está no bolso fizesse essa ponte?</p>
                        <ul className="cartao-lista">
                            <li>Um modo Libras dentro do app de câmera</li>
                            <li>Rastreia mãos, rosto e expressões em tempo real</li>
                            <li>Reconhece os sinais e mostra a tradução na tela</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>

        
        <section className="secao" id="funcionamento">
            <div className="recipiente">
                <div className="secao-cabecalho revela">
                    <p className="secao-rotulo">03 · Funcionamento</p>
                    <h2 className="secao-titulo">Da câmera ao texto, em quatro etapas</h2>
                    <svg className="secao-objeto secao-icone" viewBox="0 0 64 64" aria-hidden="true"><use href="#s-etapas"></use></svg>
                    <p className="secao-lead">
                        Todo o caminho roda no aparelho, em sequência, enquanto a pessoa sinaliza.
                    </p>
                </div>

                <ol className="etapas revela">
                    <li className="etapa">
                        <h3>Captura</h3>
                        <p>A câmera do celular registra os movimentos das mãos e do rosto.</p>
                    </li>
                    <li className="etapa">
                        <h3>Rastreamento</h3>
                        <p>
                            O MediaPipe extrai os pontos-chave de mãos e face, incluindo marcadores
                            não-manuais como o movimento das sobrancelhas.
                        </p>
                    </li>
                    <li className="etapa">
                        <h3>Reconhecimento</h3>
                        <p>
                            Modelos de machine learning (MLP e LSTM) classificam sinais estáticos
                            e sinais em movimento.
                        </p>
                    </li>
                    <li className="etapa">
                        <h3>Tradução</h3>
                        <p>
                            O texto aparece na tela em tempo real, dentro da mesma interface de
                            câmera que o usuário já conhece.
                        </p>
                    </li>
                </ol>

                <div className="destaque-local revela">
                    <p>
                        E nada disso sai do aparelho: todo o processamento é local, sem nuvem, e
                        funciona em qualquer lugar, inclusive offline.
                    </p>
                </div>
            </div>
        </section>

        
        <section className="secao" id="publico">
            <div className="recipiente">
                <div className="secao-cabecalho revela">
                    <p className="secao-rotulo">04 · Público-alvo</p>
                    <h2 className="secao-titulo">Quem usa o VisuAll</h2>
                    <svg className="secao-objeto secao-icone" viewBox="0 0 64 64" aria-hidden="true"><use href="#s-publico"></use></svg>
                    <p className="secao-lead">
                        A barreira quase nunca está na pessoa surda: ela já se comunica com
                        fluência. Está em quem não entende Libras, e é nesse lado que o VisuAll age.
                    </p>
                </div>

                <div className="grade-publico revela">
                    <article className="card-publico">
                        <h3>Quem aponta a câmera</h3>
                        <p>
                            Pessoas ouvintes que não sabem Libras: estudantes, professores,
                            atendentes, colegas e familiares. Em vez de papel ou gestos
                            improvisados, basta abrir a câmera.
                        </p>
                    </article>

                    <article className="card-publico">
                        <h3>Quem se beneficia</h3>
                        <p>
                            Pessoas surdas e falantes de Libras ganham autonomia: comunicam-se
                            na própria língua, e o esforço de compreensão passa para o outro
                            lado da conversa.
                        </p>
                    </article>

                    <article className="card-publico">
                        <h3>Onde acontece</h3>
                        <p>
                            Sala de aula, balcão de atendimento, consultório, convívio cotidiano.
                            Situações comuns em que não há intérprete disponível e a conversa
                            simplesmente não acontece.
                        </p>
                    </article>

                    <article className="card-publico">
                        <h3>Por que importa</h3>
                        <p>
                            O recurso já vive dentro do app de câmera, e não em um aplicativo
                            separado que ninguém lembra de baixar. Está pronto no momento em que
                            a conversa precisa acontecer.
                        </p>
                    </article>
                </div>
            </div>
        </section>

        
        <section className="secao" id="tecnologia">
            <div className="recipiente">
                <div className="secao-cabecalho revela">
                    <p className="secao-rotulo">05 · Tecnologia</p>
                    <h2 className="secao-titulo">O que roda por baixo</h2>
                    <svg className="secao-objeto secao-icone" viewBox="0 0 64 64" aria-hidden="true"><use href="#s-chip"></use></svg>
                    <p className="secao-lead">
                        Decisões técnicas tomadas para caber em um celular comum, sem servidor
                        e sem latência de rede.
                    </p>
                </div>

                <dl className="grade-tecnologia revela">
                    <div className="item-tecnologia">
                        <dt>MediaPipe</dt>
                        <dd>
                            Extração dos pontos-chave de mãos e face, incluindo marcadores
                            não-manuais da Libras.
                        </dd>
                    </div>
                    <div className="item-tecnologia">
                        <dt>MLP</dt>
                        <dd>
                            Classificação de sinais estáticos, a partir da configuração das mãos
                            em um único quadro.
                        </dd>
                    </div>
                    <div className="item-tecnologia">
                        <dt>LSTM</dt>
                        <dd>
                            Reconhecimento de sinais em movimento, considerando a sequência
                            temporal dos quadros.
                        </dd>
                    </div>
                    <div className="item-tecnologia">
                        <dt>Execução no aparelho</dt>
                        <dd>
                            Inferência local no Android, sem nuvem: nenhuma imagem do usuário
                            é enviada para fora do celular.
                        </dd>
                    </div>
                </dl>
            </div>
        </section>

        
        <section className="secao" id="galeria">
            <div className="recipiente">
                <div className="secao-cabecalho revela">
                    <p className="secao-rotulo">06 · Demonstração</p>
                    <h2 className="secao-titulo">Demonstração</h2>
                    <svg className="secao-objeto secao-icone" viewBox="0 0 64 64" aria-hidden="true"><use href="#s-video"></use></svg>
                    <p className="secao-lead">
                        Conheça o projeto e veja a proposta do VisuAll em ação.
                    </p>
                </div>

                <div className="grade-galeria revela">
                    <figure className="galeria-video">
                        <h3 className="galeria-video-titulo">Vídeo pitch</h3>
                        <div className="moldura moldura--video">
                            <a className="video-capa" href="https://www.youtube.com/watch?v=OTPf8B4C49Y" target="_blank" rel="noopener" data-video="OTPf8B4C49Y">
                                <img src="/images/video-capa.jpg" alt="" width="1280" height="720" loading="lazy" />
                                <span className="video-play" aria-hidden="true"></span>
                                <span className="so-leitor">Assistir à demonstração do aplicativo VisuAll</span>
                            </a>
                        </div>
                        <figcaption className="video-legenda">Assista em menos de 5 minutos</figcaption>
                    </figure>
                </div>
            </div>
        </section>

        
        <section className="secao" id="baixar">
            <div className="recipiente">
                <div className="secao-cabecalho revela">
                    <p className="secao-rotulo">07 · Baixar</p>
                    <h2 className="secao-titulo">Teste no seu celular</h2>
                    <svg className="secao-objeto secao-icone" viewBox="0 0 64 64" aria-hidden="true"><use href="#s-baixar"></use></svg>
                    <p className="secao-lead">
                        O app recebe melhorias toda semana. O botão e o QR code
                        entregam sempre a versão mais nova.
                    </p>
                </div>

                
                <div className="grade-baixar revela">
                    <div className="baixar-acao">
                        <a className="btn btn--primario" href="https://github.com/VisuAll2K26/VisuAll2K26.github.io/releases/download/app/VisuAll.apk">Baixar para Android</a>
                        <p className="baixar-versao" data-versao-apk={true}>Android 8 ou mais recente</p>
                        <ol className="baixar-passos">
                            <li>Baixe o arquivo e abra quando terminar.</li>
                            <li>Se o celular pedir, permita instalar apps desta fonte.</li>
                            <li>Já tem o VisuAll? Instale por cima: o histórico continua.</li>
                        </ol>
                    </div>
                    <figure className="baixar-qr">
                        <img src="/images/qr-baixar.svg" alt="QR code que abre a página de download do VisuAll" width="200" height="200" loading="lazy" />
                        <figcaption>Aponte a câmera do celular</figcaption>
                    </figure>
                </div>
            </div>
        </section>

        
        <section className="secao" id="equipe">
            <div className="recipiente">
                <div className="secao-cabecalho revela">
                    <p className="secao-rotulo">08 · Equipe</p>
                    <h2 className="secao-titulo">Quem construiu o VisuAll</h2>
                    <svg className="secao-objeto secao-icone" viewBox="0 0 64 64" aria-hidden="true"><use href="#s-equipe"></use></svg>
                    <p className="secao-lead">
                        Cinco estudantes de Engenharia de Software da FIAP.
                    </p>
                </div>

                <div className="grade-equipe revela" role="region" aria-label="Integrantes da equipe" tabIndex="0">
                    <article className="integrante">
                        <img src="/images/team/joao.jpeg" alt="João Victor Pereira Gimenes" className="integrante-foto" width="88" height="88" loading="lazy" />
                        <h3>João Victor Pereira Gimenes</h3>
                        <a className="link-perfil" target="_blank" rel="noopener" href="https://www.linkedin.com/in/jo%C3%A3o-victor-pereira-gimenes-191615374/">
                            LinkedIn <span aria-hidden="true">↗</span>
                        </a>
                    </article>

                    <article className="integrante">
                        <img src="/images/team/rafael.jpeg" alt="Rafael Boletini de Oliveira" className="integrante-foto" width="88" height="88" loading="lazy" />
                        <h3>Rafael Boletini de Oliveira</h3>
                        <a className="link-perfil" target="_blank" rel="noopener" href="https://www.linkedin.com/in/rafael-boletini-de-oliveira-24b782275/">
                            LinkedIn <span aria-hidden="true">↗</span>
                        </a>
                    </article>

                    <article className="integrante">
                        <img src="/images/team/juan.jpeg" alt="Juan Duarte Moura" className="integrante-foto" width="88" height="88" loading="lazy" />
                        <h3>Juan Duarte Moura</h3>
                        <a className="link-perfil" target="_blank" rel="noopener" href="https://www.linkedin.com/in/juan-duarte-moura/">
                            LinkedIn <span aria-hidden="true">↗</span>
                        </a>
                    </article>

                    <article className="integrante">
                        <img src="/images/team/victor.jpg" alt="Victor Rossi Sales Zanandré" className="integrante-foto" width="88" height="88" loading="lazy" />
                        <h3>Victor Rossi Sales Zanandré</h3>
                        <a className="link-perfil" target="_blank" rel="noopener" href="https://www.linkedin.com/in/victor-zanandre/">
                            LinkedIn <span aria-hidden="true">↗</span>
                        </a>
                    </article>

                    <article className="integrante">
                        <img src="/images/team/julio.jpeg" alt="Julio Cesar da Silva Cocco" className="integrante-foto" width="88" height="88" loading="lazy" />
                        <h3>Julio Cesar da Silva Cocco</h3>
                        <a className="link-perfil" target="_blank" rel="noopener" href="https://www.linkedin.com/in/julio-cesar-da-silva-cocco-085400338/">
                            LinkedIn <span aria-hidden="true">↗</span>
                        </a>
                    </article>
                </div>
            </div>
        </section>

        
        <section className="secao" id="contato">
            <div className="recipiente">
                <div className="secao-cabecalho revela">
                    <p className="secao-rotulo">09 · Contato</p>
                    <h2 className="secao-titulo">Fale com a equipe</h2>
                    <svg className="secao-objeto secao-icone" viewBox="0 0 64 64" aria-hidden="true"><use href="#s-contato"></use></svg>
                    <p className="secao-lead">
                        Avalie o projeto, escreva para a gente ou siga os nossos canais.
                    </p>
                </div>

                
                <Avaliacao /><address className="grade-contato revela">
                    <ul className="contato-canais">
                        <li>
                            <a className="canal" href="mailto:visuall2k26@gmail.com">
                                <span className="canal-nome">E-mail</span>
                                <span className="canal-valor">visuall2k26@gmail.com</span>
                                <span className="canal-seta" aria-hidden="true">↗</span>
                            </a>
                        </li>
                        <li>
                            <a className="canal" href="https://www.instagram.com/visuall2k26?stkn=ZHBudTkzZTJzZ3Jp" target="_blank" rel="noopener">
                                <span className="canal-nome">Instagram</span>
                                <span className="canal-valor">@visuall2k26</span>
                                <span className="canal-seta" aria-hidden="true">↗</span>
                            </a>
                        </li>
                        <li>
                            <a className="canal" href="https://www.youtube.com/@VisuAll2K26" target="_blank" rel="noopener">
                                <span className="canal-nome">YouTube</span>
                                <span className="canal-valor">@VisuAll2K26</span>
                                <span className="canal-seta" aria-hidden="true">↗</span>
                            </a>
                        </li>
                        <li>
                            <a className="canal" href="https://www.tiktok.com/@visuall2k26" target="_blank" rel="noopener">
                                <span className="canal-nome">TikTok</span>
                                <span className="canal-valor">@visuall2k26</span>
                                <span className="canal-seta" aria-hidden="true">↗</span>
                            </a>
                        </li>
                    </ul>
                </address>
            </div>
        </section>

    </main>);}