import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: "#141414"}}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Agora todas as profissões estão sendo impactadas com essa nova Inteligência Artificial... literalmente não vai sobrar mais pra ninguém e nesse vídeo eu mostro várias demonstrações do GPT-3 sendo aplicado em diversos campos: Frontend com React, Layout e Design com Figma, Geração de gráficos, Queries SQL, Comandos no Terminal do Linux, Automação no Excel, tem de tudo! E eu reforço, nem nas minhas mais ousadas previsões sobre o futuro da programação ou tecnologia eu poderia imaginar que algo assim. Mas independente disso, ao final do vídeo eu dou minha sugestão do que um Programador deveria estudar daqui pra frente... qual conhecimento será a prova de bala."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />      

      <Footer />
    </div>
  );
}

export default Home;
