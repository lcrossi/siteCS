<template>
    <div>
        <head>
            <title>Sobre nós</title>
        </head>
        <body>
            <section>
                <div class = "container_sobre">
                    <div class="sobre_sec1">
                    <br/>
                        <div class="linha_sec1"></div>
                        <div class="sobre_sec1_titulo">Sobre nós</div>
                            <div class="sobre_sec1_texto">
                                <p>
                                A CS é um capítulo do IEEE que tem o objetivo desmitificar e fomentar a computação, 
                                entender as tecnologias e ferramentas para montagem de apps, sites, análise de dados
                                 além das diversas outras hard skills envolvidas nos processos e, também, as soft skills.
                                Tudo isso por meio de projetos e capacitações com o intuito de ajudar nossos membros a 
                                se prepararem para carreiras, principalmente aquelas que envolvam a área de TI.
                                </p>
                                <br>
                             </div>
                        </div>
                           
                        <div class = "sobre_sec2">  
                            <div class = "linha_sec2"></div>
                            <div class="sobre_sec2_titulo">Nossos Membros</div>
                            <br>
                            <div class="sobre_sec2_membros">
                               <div class = "perfil_membro">
                                   <div class = "foto"></div>
                                   <div class = "nome">Nome/Apelido</div>
                                   <div class = "cargo">Cargo</div>
                                </div>  
                                <div class = "perfil_membro">
                                   <div class = "foto"></div>
                                   <div class = "nome">Nome/Apelido</div>
                                   <div class = "cargo">Cargo</div>
                                </div>  
                               <div class = "perfil_membro">
                                   <div class = "foto"></div>
                                   <div class = "nome">Nome/Apelido</div>
                                   <div class = "cargo">Cargo</div>
                                </div>  
                               <div class = "perfil_membro">
                                   <div class = "foto"></div>
                                   <div class = "nome">Nome/Apelido</div>
                                   <div class = "cargo">Cargo</div>
                                </div>  
                               <div class = "perfil_membro">
                                   <div class = "foto"></div>
                                   <div class = "nome">Nome/Apelido</div>
                                   <div class = "cargo">Cargo</div>
                                </div>  
                               <div class = "perfil_membro">
                                   <div class = "foto"></div>
                                   <div class = "nome">Nome/Apelido</div>
                                   <div class = "cargo">Cargo</div>
                                </div>
                               <div class = "perfil_membro">
                                   <div class = "foto"></div>
                                   <div class = "nome">Nome/Apelido</div>
                                   <div class = "cargo">Cargo</div>
                                </div>  
                               <div class = "perfil_membro">
                                   <div class = "foto"></div>
                                   <div class = "nome">Nome/Apelido</div>
                                   <div class = "cargo">Cargo</div>
                                </div>                                 
                            </div>
                        </div>
                </div>
            </section>
  
            
            <section> 

                <div class = "container_proj">
                <br>
                <div class = "linha_proj"></div>
                <div class = "titulo_proj">Destaque de alguns trabalhos</div> 
                <br>
                <div class = "projetos">
                    <div class = "trabalho">
                        <div class = "foto_trabalho"></div>
                        <div class = "nome_trabalho">Trabalho 1</div>
                        <div class = "descricao">
                            <p>
                            Breve descrição
                            </p>
                        </div>
                    </div>
                    <div class = "trabalho">
                        <div class = "foto_trabalho"></div>
                        <div class = "nome_trabalho">Trabalho 2</div>
                        <div class = "descricao">
                            <p>
                            Breve descrição
                            </p>
                        </div>
                    </div>
                    <div class = "trabalho">
                        <div class = "foto_trabalho"></div>
                        <div class = "nome_trabalho">Trabalho 3</div>
                        <div class = "descricao">
                            <p>
                            Breve descrição
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
    
    .container_sobre {
        width: 100%;
        color: #FFFFFF;
        background-color: #16558B;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }

    .sobre_sec1 {
        display: flex;
        flex-direction: column;
        margin-left:135px;
    }

    .linha_sec1 {
        width: 70px;
        border-top: 3px solid #FFFFFF;
        border-radius: 5px;
    }

    .linha_sec1 {
        width: 70px;
        border-top: 3px solid #FFFFFF;
        border-radius: 10px;
    }
    .sobre_sec1_titulo{
        margin-top: 10px;
        margin-bottom: 50px;
    }

    .sobre_sec1_texto{
        text-align: justify;
        margin-right:135px;
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
    
    .sobre_sec2_titulo{
        align-self: center;
    }

      .sobre_sec2_membros{
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        flex-wrap: wrap;
        margin-left: 135px;
        margin-right:135px;
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
    .container_proj{
        width: 100%;
        color: #000000;
        background-color: #FFFFFF;
        display: flex;
        justify-content: space-around;
        display:flex;
        flex-direction: column;
    }
    
    .linha_proj{
        width: 70px;
        border-top: 3px solid #000000;
        border-radius: 5px; 
        margin-left:135px;
    }

    .titulo_proj{
        margin-left:135px;
        margin-top:5px;
    }

    .projetos{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-left: 135px;
        margin-right: 135px;
    }

    .trabalho{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .foto_trabalho{
        height: 450px;
        width: 320px;
        background-color: #4E98D0;
        border-radius: 50px;
        box-shadow: -3px 6px 50px rgba(0, 0, 0, 0.2);
    }
    .descricao{
        color: #7c7c7c7c;
        font-size:21px;
    }

    .descricao p{
        max-width: 230px;
        max-height: 122px;

    }
 
</style>