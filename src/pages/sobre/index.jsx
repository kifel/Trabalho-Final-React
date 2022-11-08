import React from "react";
import { FooterPage } from "../../components/footer";
import github from "./img/github.png";
import linkedin from './img/linkedin.png';
import "./index1.css";
export const Sobre =()=> {
    return(
        <>
    <div class="container">
        
    
        <article class="article">

    <img class="githubavatar" src="https://avatars.githubusercontent.com/u/61091742?v=4"
                alt="imagem do github"></img>
            <p>João Victor de Mello Pereira  (Kifel)</p>
            <p>21 anos.</p>
            <p>Estudante de Engenharia elétrica e do SerraTec 2022.2</p>
            <a href="https://github.com/kifel" target="_blank">
                <img class="githublink" src={github} alt="imagem do github"></img>
            </a>
            <a href="https://www.linkedin.com/in/kifel/?originalSubdomain=br" target="_blank">
            <img class="githublink" src={linkedin} alt="imagem do linkedin"></img>
        </a>
            </article>
            <article class="article">

    <img class="githubavatar" src="https://avatars.githubusercontent.com/u/112448816?s=400&u=5e44fbe553928848a7c0157afe78f7b9427988e5&v=4"
            alt="imagem do github"></img>
        <p>Gabriel Cavalcante Brandão</p>
        <p>32 anos.</p>
        <p>Engenheiro de produção e estudante do SerraTec 2022.2</p>
        <a href="https://github.com/GabrielCBrandao" target="_blank">
            <img class="githublink" src={github} alt="imagem do github"></img>
        </a>
        <a href="https://www.linkedin.com/in/gabriel-brand%C3%A3o-427b47235/" target="_blank">
            <img class="githublink" src={linkedin} alt="imagem do linkedin"></img>
        </a>
        </article>
        <article class="article">

    <img class="githubavatar" src="https://avatars.githubusercontent.com/u/105392455?v=4"
            alt="imagem do github"></img>
        <p> Moacyr Kennedy Camacho 
            </p>
        <p> 28 Anos.</p>
        <p> Estudante de Engenharia de Software . Residência em TIC | Serratec.</p>
        <a href="https://github.com/MoacyrKennedy" target="_blank">
            <img class="githublink" src={github} alt="imagem do github"></img>
        </a>
        <a href="https://www.linkedin.com/in/moacyrkennedy/" target="_blank">
            <img class="githublink" src={linkedin} alt="imagem do linkedin"></img>
        </a>
        </article>
        <article class="article">

    <img class="githubavatar" src="https://avatars.githubusercontent.com/u/110864780?v=4"
            alt="imagem do github"></img>
        <p> Brenda Folly Toledo</p>
        <p> 29 Anos.</p>
        <p> Graduada em Administração de empresas pela UNESA e estudante do SerraTec 2022.2</p>
        <a href="https://github.com/bft1993" target="_blank">
            <img class="githublink" src={github} alt="imagem do github"></img>
        </a>
        <a href="https://www.linkedin.com/in/brenda-folly-toledo-6070ba92/" target="_blank">
            <img class="githublink" src={linkedin} alt="imagem do linkedin"></img>
        </a>
        </article>
        <article class="article">

    <img class="githubavatar" src="https://avatars.githubusercontent.com/u/109103851?v=4"
            alt="imagem do github"></img>
        <p> Rafaela Rezende Ventura</p>
        <p> 28 anos.</p>
        <p> Nutricionista e estudante do SerraTec 2022.2 </p>
        <a href="https://github.com/Rafaelarventura" target="_blank">
            <img class="githublink" src={github} alt="imagem do github"></img>
        </a>
        <a href="https://www.linkedin.com/in/rafaela-ventura-8b4763123/" target="_blank">
            <img class="githublink" src={linkedin} alt="imagem do linkedin"></img>
        </a>
        </article>
        
            
            
            
            </div>
          <FooterPage />  
          </>
    );



}
    

