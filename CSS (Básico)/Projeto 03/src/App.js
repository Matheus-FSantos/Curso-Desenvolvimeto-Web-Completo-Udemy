/*eslint-disable no-unused-vars*/
/*eslint-disable jsx-a11y/anchor-is-valid*/
import './app.css';

import imagem1 from './img/imagem1.jpg';
import imagem2 from './img/imagem2.jpg';
import imagem3 from './img/imagem3.jpg';
import imagem4 from './img/imagem4.jpg';
import imagem5 from './img/imagem5.jpg';

function App() {
  return (
    <div>
      <div class='cabecalho'>
        <h1 class='cabecalhoTitulo'>Tec<span class='cabecalhoTituloBranco'>Blog</span></h1>
        <div class='cabecalhoNav'>
          <a href='' class='cabecalhoLink'>Home</a>
          <a href='' class='cabecalhoLink'>Jogos</a>
          <a href='' class='cabecalhoLink'>Celulares</a>
          <a href='' class='cabecalhoLink'>Informática</a>
          <a href='' class='cabecalhoLink'>Eletrônicos</a>
        </div>
      </div>

      <div class='conteinerPrincipal'>
        <div class='postagens'>
          <div class='postagem1'>
            <h1 class='tituloPost'>Titulo da postagem 01</h1>
            <span class='subtituloPost'>Postado em 26 de setembro de 2022</span>
            <img class='imagem1' src={imagem1}/>
            <p class='descricaoPost'>
              Lorem ipsum dolor sit amet, consectetur adip  
              occurence velit, sed diam nonumy eirmod tempor 
              inviduer. Ut enim ad minim veniam, quis nostrud 
              exerci. Ut enim ad minim veniam, quis nostrud 
              exerci. Ut enim ad minim veniam, quis nostrud 
              exerci.
            </p>
            <a class='linkPost' href=''>Leia Mais</a>
          </div>
          <div class='postagem1'>
            <h1 class='tituloPost'>Titulo da postagem 02</h1>
            <span class='subtituloPost'>Postado em 27 de setembro de 2022</span>
            <img class='imagem1' src={imagem2}/>
            <p class='descricaoPost'>
              Lorem ipsum dolor sit amet, consectetur adip  
              occurence velit, sed diam nonumy eirmod tempor 
              inviduer. Ut enim ad minim veniam, quis nostrud 
              exerci. Ut enim ad minim veniam, quis nostrud 
              exerci. Ut enim ad minim veniam, quis nostrud 
              exerci.
            </p>
            <a class='linkPost' href='' >Leia Mais</a>
          </div>
          <div class='postagem1'>
            <h1 class='tituloPost'>Titulo da postagem 03</h1>
            <span class='subtituloPost'>Postado em 27 de setembro de 2022</span>
            <img class='imagem1' src={imagem3}/>
            <p class='descricaoPost'>
              Lorem ipsum dolor sit amet, consectetur adip  
              occurence velit, sed diam nonumy eirmod tempor 
              inviduer. Ut enim ad minim veniam, quis nostrud 
              exerci. Ut enim ad minim veniam, quis nostrud 
              exerci. Ut enim ad minim veniam, quis nostrud 
              exerci.
            </p>
            <a class='linkPost' href=''>Leia Mais</a>
          </div> 
        </div>

        <div class='menuLateral'>
          <div class='postagem2'>
            <h3 class='tituloPost2'>Postagens Recentes</h3>
            <br/>
            <div class='postagemLateral'>
              <p class='descricaoPost'>
                Lorem ipsum dolor sit amet, consectetur adip  
                occurence velit.
              </p>
              <a class='linkPost' href=''>Leia Mais</a>
            </div>
            <hr/>
            <div class='postagemLateral'>
              <p class='descricaoPost'>
                Lorem ipsum dolor sit amet, consectetur adip  
                occurence velit.
              </p>
              <a class='linkPost' href=''>Leia Mais</a>
            </div>
          </div>

          <br/><br/>
          
          <div class='postagem2'>
            <h3 class='tituloPost2'>Categorias</h3>
            <br/>
            <div class='postagemLateral'>
              <a class='linkPost' href=''>Jogos</a>
              <a class='linkPost' href=''>Celulares</a>
              <a class='linkPost' href=''>Informática</a>
              <a class='linkPost' href=''>Eletrônicos</a>
              <a class='linkPost' href=''>Videogames</a>
              <a class='linkPost' href=''>Rodapé</a>
            </div>
          </div>
        </div>
        
        
        <div class='clear'>

        </div>
      </div>

      <div class='rodape'>
          <h5 class='rodapeTitulo'>Todos os direitos Reservados</h5>
      </div>
    </div>
  );
}

export default App;
