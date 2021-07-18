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
                                A CS é um capítulo do IEEE que tem o objetivo desmistificar e fomentar a prática da computação
                                a partir do estudo, entendimento e aplicação das tecnologias e ferramentas usadas na montagem de apps e sites, análise de dados
                                e diversas outras hard (e soft) skills envolvidas nos processos. <br/>
                                Tudo isso acontece por meio de projetos e capacitações internas com o intuito de ajudar nossos integrantes a 
                                se prepararem para o mercado de trabalho, principalmente naquelas que envolvam a área de TI.
                                <br>
                             </div>
                        </div>
                           
                        <div class = "sobre_sec2">  
                            <div class = "linha_sec2"></div>
                            <div class="sobre_sec1_titulo" style="align-self: center">Nossos Membros</div>
                            <br>
                            <PerfilMembros :ArrayMembers="members"/>  
                        </div>
                </div>
            </section>
  
            
            <section id="sec_projetos"> 

                <div class = "container_white">
                <br>
                <div class = "linha_titulo"></div>
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
                            informações para pessoas de dentro e fora da extensão.
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
import PerfilMembros from '../components/pagesComponents/sobreComponents/perfilMembros.vue'

export default {
    name: 'Sobre',
    data() {
        return {
            members: [
                {nome: 'Fernando (Seq)', foto: '../../../assets/Sobre_assets/silhuetaPerfil.png', cargo: 'Presidente', id:1},
                {nome: 'Pedro (Casado)', foto: '../../../assets/Sobre_assets/silhuetaPerfil.png', cargo: 'Vice-Presidente', id:2},
                {nome: 'Luis (Zeca)', foto: '../../../assets/Sobre_assets/silhuetaPerfil.png', cargo: 'Diretor de Projetos', id:3},
                {nome: 'Henrique (Astro)', foto: '../../../assets/Sobre_assets/silhuetaPerfil.png', cargo: 'Diretor Secretário', id:4},
                {nome: 'Gabriel (Garçom)', foto: '../../../assets/Sobre_assets/silhuetaPerfil.png', cargo: 'Diretor de Marketing', id:5},
                {nome: 'Lucas (Come)', foto: '../../../assets/Sobre_assets/silhuetaPerfil.png', cargo: 'Coordenador de Projetos', id:6},
                {nome: 'Lukas (Oompa)', foto: '../../../assets/Sobre_assets/silhuetaPerfil.png', cargo: 'Representante de DEV', id:7},
                {nome: 'João (Calado)', foto: '../../../assets/Sobre_assets/silhuetaPerfil.png', cargo: 'Desenvolvedor de IA', id:8},
                {nome: 'Laís (Ed)', foto: '../../../assets/Sobre_assets/silhuetaPerfil.png', cargo: 'Assessora de Marketing', id:9},
            ]
        }
    },
    components:{
        PerfilMembros,
    }
}
</script>

<style>
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
        width: 100%;
        font-size: 24px;
        line-height: 24px;
        padding-bottom: 50px;
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
    
    .linha_titulo{
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
        color: #5c5c5c7c;
        font-size:21px;
        text-align: justify;
    }

    .descricao p{
    max-width: 230px;
    font-size: clamp(14px, 80%, 18px);
    }
 
</style>