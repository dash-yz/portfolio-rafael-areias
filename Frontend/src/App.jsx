// Estilização
import './App.css'
//.

// Componentes e React
import { useState } from 'react'
import { portfolioItems } from './data'
//.

// Imagem
let Foto = 'https://d2opxh93rbxzdn.cloudfront.net/original/2X/4/40cfa8ca1f24ac29cfebcb1460b5cafb213b6105.png'
//.

function App() {

  const [categoriaAtual, setCategoriaAtual] = useState('todos')

  const categoriaChange = (categoria) => {
    let categoriaAntiga = categoriaAtual
    document.getElementById(categoriaAntiga).classList.remove('st-active')
    document.getElementById(categoriaAntiga).classList.add('st-noActive')

    setCategoriaAtual(categoria)
    document.getElementById(categoria).classList.add('st-active')
    document.getElementById(categoria).classList.remove('st-noActive')
  }

  return (
    <>
      <section className='sc-body'>
        <header className='st-header'>
          <h1>Rafael Areias</h1>
          <nav className='st-nav'>
            <a href="#portfolio">Portfólio</a>
            <a href="#sobre">Sobre</a>
            <a href='https://www.instagram.com/maxlmos' target='_blank'>Contato</a>
          </nav>
        </header>

        <main className='st-main'>
          <section className='st-mainInfo'>
            <img className='st-foto' src={Foto} alt="Imagem do Artista" />
            <section className='st-td'>
              <h2>Rafael Areias Solimeo</h2>
              <p>Ilustrador e desenhista. Especializado em desenhar bonito. <br /> Transformando ideias em arte atráves do desenho.</p>
            </section>

            <section className='st-buttons'>
              <a href="#portfolio" className='st-button1'>Ver Trabalhos</a>
              <a href='https://www.instagram.com/maxlmos' className='st-button2'>Entrar em Contato</a>
            </section>

          </section>
          <i class="fa-solid fa-arrow-down"></i>

        </main>

        <hr />

        <section id='portfolio' className='st-portfolio'>

          <section className='st-hPortfolio'>
            <h2>Portfólio</h2>
            <p>Seleção de trabalhos recentes. Cada desenho conta uma história única.</p>
          </section>

          <section className='st-filtros'>
            <button id='todos' className='st-buttonFiltros st-active' onClick={() => categoriaChange('todos')}>Todos</button>
            <button id='Estilo 1' className='st-buttonFiltros st-noActive' onClick={() => categoriaChange('Estilo 1')}>Estilo 1</button>
            <button id='Estilo 2' className='st-buttonFiltros st-noActive' onClick={() => categoriaChange('Estilo 2')}>Estilo 2</button>
            <button id='Estilo 3' className='st-buttonFiltros st-noActive' onClick={() => categoriaChange('Estilo 3')}>Estilo 3</button>
          </section>

          <section className='st-galeria'>

            {Object.values(portfolioItems).map((item) => {
              if (categoriaAtual === 'todos' || item.categoria === categoriaAtual) {
                return (
                  <div key={item.id} className='st-item'>
                    <img src={item.imagem} alt={item.descricao} />
                    <section className='st-itemInfo'>
                      <h4>{item.nome}</h4>
                      <p>{item.categoria} - {item.ano}</p>
                    </section>
                  </div>
                );
              }
              return null;
            })}
          </section>

        </section>

        <hr />

        <section id='sobre' className='st-sobre'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS97h5PsMDsjpHqK3_jSbKU2OS1VMQVsKYAzg&s" alt="Foto do Artista" />
          <article className='st-infoSobre'>
            <section>
              <h5>Sobre o Artista</h5>
              <article>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Especializado em desenhos a lápis, carvão e tinta.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Cada peça é criada com atenção aos detalhes e paixão pela arte.</p>
              </article>
            </section>

            <section>
              <h6>Técnicas</h6>
              <section className='st-sobreTecnicas'>
                <p>Carvão</p>
                <p>Aquarela</p>
                <p>Chiaroescuro</p>
              </section>
            </section>

            <section className='st-sobreExperiencias'>
              <h6>Experiências</h6>
              <p>Apenas trabalhos pessoais.</p>
            </section>

          </article>
        </section>

        <hr />

        <footer className='st-footer'>

          <section className='st-footerArticle'>
            <section className='st-footerInfo'>
              <h1>Rafael Areias Solimeo</h1>
              <p>Ilustrador e desenhista profissional.</p>
              <p>Criando arte única desde 2020.</p>
            </section>

            <section className="st-footerContato">
              <h1>Informações de Contato</h1>
              <p>rafaelareias@email.com</p>
              <p>+55 11 91234-5678</p>
            </section>
          </section>

          <p className='st-footerDA'>© 2026 Rafael Areias. Todos os direitos reservados.</p>
        </footer>

      </section>
    </>
  )
}

export default App
