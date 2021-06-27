<template>
    <div>
        <head>
            <title>Sobre nós</title>
        </head>
        <body>
            <section id="sec_sobre_nos">
                <div class = "container_blue">
                    <div class="sobre_sec1">
                    <br/>
                        <div class="linha_sec1"></div>
                        <div class="sobre_sec1_titulo">Sobre nós</div>
                            <div class="sobre_sec1_texto">
                                <p>
                                A CS é um capítulo do IEEE que tem o objetivo desmistificar e fomentar a prática da computação
                                a partir do estudo, entendimento e aplicação das tecnologias e ferramentas usadas na montagem de apps e sites, análise de dados
                                e diversas outras hard (e soft) skills envolvidas nos processos. <br/>
                                Tudo isso acontece por meio de projetos e capacitações internas com o intuito de ajudar nossos integrantes a 
                                se prepararem para o mercado de trabalho, principalmente naquelas que envolvam a área de TI.
                                </p>
                                <br>
                             </div>
                        </div>
                           
                        <div class = "sobre_sec2">  
                            <div class = "linha_sec2"></div>
                            <div class="sobre_sec1_titulo" style="align-self: center">Nossos Membros</div>
                            <br>
                            <div class="sobre_sec2_membros">
                               <div class = "perfil_membro">
                                   <div class = "foto"></div>
                                   <div class = "nome">Fernando (Seq)</div>
                                   <div class = "cargo">Presidente</div>
                                </div>  
                                <div class = "perfil_membro">
                                   <div class = "foto"></div>
                                   <div class = "nome">Luis (Zeca)</div>
                                   <div class = "cargo">Diretor de Projetos</div>
                                </div>  
                               <div class = "perfil_membro">
                                   <div class = "foto"></div>
                                   <div class = "nome">Lucas (Come)</div>
                                   <div class = "cargo">Coordenador de Projetos</div>
                                </div>  
                               <div class = "perfil_membro">
                                   <div class = "foto"></div>
                                   <div class = "nome">Lukas (Oompa)</div>
                                   <div class = "cargo">Representante de DEV</div>
                                </div>  
                               <div class = "perfil_membro">
                                   <div class = "foto"></div>
                                   <div class = "nome">Henrique (Astro)</div>
                                   <div class = "cargo">Diretor Secretário</div>
                                </div>  
                               <div class = "perfil_membro">
                                   <div class = "foto"></div>
                                   <div class = "nome">João (Calado)</div>
                                   <div class = "cargo">Programador de IA</div>
                                </div>
                               <div class = "perfil_membro">
                                   <div class = "foto"></div>
                                   <div class = "nome">Gabriel (Garçom)</div>
                                   <div class = "cargo">Diretor de Marketing</div>
                                </div>  
                               <div class = "perfil_membro">
                                   <div class = "foto"></div>
                                   <div class = "nome">Laís (Ed)</div>
                                   <div class = "cargo">Assessora de Marketing</div>
                                </div>                                 
                            </div>
                        </div>
                </div>
            </section>
  
            
            <section id="sec_projetos"> 

                <div class = "container_white">
                <br>
                <div class = "linha_proj"></div>
                <div class = "titulo_proj">Destaque de alguns trabalhos</div> 
                <br>
                <div class = "projetos">
                    <div class = "trabalho">
                        <img src="../assets/Home_assets/desenho_celular.png" 
                        alt="Imagem de celular"/>
                        <div class = "nome_trabalho">Projeto RCCA</div>
                        <div class = "descricao">
                            <p>
                            Neste projeto você pode utilizar ferramentas como a Espinha de Peixe (Ishikawa), Matrizes de Priorização (GUT e AB), 
                            5W2H, entre diversas outras para mapear causas raiz e definir as ações corretivas e otimizar a gestão da qualidade!
                            </p>
                        </div>
                    </div>
                    <div class = "trabalho">
                        <img src="../assets/Home_assets/desenho_celular.png" 
                        alt="Imagem de celular"/>
                        <div class = "nome_trabalho">FeGo</div>
                        <div class = "descricao">
                            <p>
                            Este projeto tem como intuito o desenvolvimento de um aplicativo de caronas exclusivo para universitários, alunos
                            do nosso campus da UNESP de Guaratinguetá e o desenvolvimento foi feito em parceria com o Centro Acadêmico de Engenharia de Produção (CaePro).
                            </p>
                        </div>
                    </div>
                    <div class = "trabalho">
                        <img src="../assets/Home_assets/desenho_celular.png" 
                        alt="Imagem de celular"/>
                        <div class = "nome_trabalho">Site da CS</div>
                        <div class = "descricao">
                            <p>
                            O resultado deste projeto é a interface que você, usuário, está vendo agora! Este projeto tem como intuito centralizar
                            informações para os integrantes da nossa extensão.
                            </p>
                        </div>
                    </div>

                </div>

                </div>
            </section>


        </body>
    </div>
</template>

<script>

export default {
    name: 'Sobre'
}
</script>

<style>
    
    .container_blue {
        color: #FFFFFF;
        background-color: #16558B;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding-bottom: 10vh;
        padding-left: 10vw;
        padding-right: 10vw;
    }

    .sobre_sec1 {
        display: flex;
        flex-direction: column;
    }

    .linha_sec1 {
        width: 70px;
        border-top: 3px solid #FFFFFF;
        border-radius: 5px;
    }
    
    .sobre_sec1_titulo{
        margin-top: 10px;
        margin-bottom: 50px;
    }

    .sobre_sec1_texto{
        text-align: justify;
        width: 100%
    }

    .sobre_sec2 {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        justify-content: center;

    }
    .linha_sec2 {
        width: 70px;
        border-top: 3px solid #FFFFFF;
        border-radius: 10px;
        align-self: center;
        margin-bottom: 10px;

    }

      .sobre_sec2_membros{
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%
      }

    .perfil_membro{
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin:5px;
    }
    .foto{
         border-radius: 50%;
         background-color: #C4C4C4;
         width: 100px;
         height:100px;
        box-shadow: -10px 9px 50px rgba(0, 0, 0, 0.17);
    }
    
    .nome{
        font-size:24px;
    }

    .cargo{
        font-size:24px;
    }

    .container_white{
        color: #000000;
        background-color: #FFFFFF;
        display: flex;
        justify-content: space-around;
        display:flex;
        flex-direction: column;
        padding-bottom: 10vh;
        margin-left: 10vw;
    }
    
    .linha_proj{
        width: 70px;
        border-top: 3px solid #000000;
        border-radius: 5px;
    }

    .titulo_proj{
        margin-top:5px;
        margin-bottom: 50px;
    }

    .projetos{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .trabalho{
        width: 300px;
        display: flex;
        flex-direction: column;
        place-items: center;
    }

    .descricao{
        color: #7c7c7c7c;
        font-size:21px;
    }

    .descricao p{
        max-width: 230px;
        font-size: clamp(14px, 80%, 18px);
    }
 
</style>