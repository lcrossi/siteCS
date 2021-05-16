<template>
    <div>
        <head>
            <title>Home</title>
        </head>
        <body>
            <header>
                <div class="barra_superior">
                    <div class="conteudo_barra">
                        <img alt="Logo CS" src="../assets/Home_assets/Logo CS.png" />
                        <img class="logo2" alt="Logo2" src="../assets/Home_assets/logo2.png" />
                        <div class="home">Home</div>
                        <div class="separador">|</div>
                        <div class="membros">Membros</div>
                        <div class="separador">|</div>
                        <div class="projetos">Projetos</div>
                        <div class="separador">|</div>
                        <div class="sobre_nos">Sobre nós</div>
                        <div class="separador">|</div>
                        <BIconList/>
                    </div>
                </div>
            </header>
            <section>
                <div class="home_sec1">
                    <div class="home_sec1_principal">
                        <div class="home_sec1_titulo">
                            Computer Society
                        </div>
                        <br/>
                        <div class="home_sec1_conteudo">
                            <p>Somos uma extensão capitulo do IEEE</p>
                            <p>da Feg-Unesp, somos voltados</p>   
                            <p>principalmente para a area de TI.</p> 
                        </div>
                        <button class="home_sec1_btn">Conheça mais sobre nós</button>
                    </div>
                    <div class="home_sec1_img">
                        
                    </div>
                </div>
            </section>
            <section>
                <div class = "container_white">
                <br>
                <div class = "linha_proj"></div>
                <div class = "titulo_proj">Destaque de alguns trabalhos</div> 
                        <div class="home_sec2_conteudo">
                            <div class="home_sec2_conteudo1">
                                <p>
                                    Montamos projetos de apps, onde trabalhamos desde o 
                                    Front-end com telas, design, Ui, UX, testes de usabilidade, 
                                    ao Back-end com javascript, HTML, CSS, Node, react.js. 
                                    Alem de claro o trabalho em equipe e metodologias ageis 
                                    como sprints bem definidos e prazos de entrega.
                                </p>
                                <img src="../assets/Home_assets/desenho_celular.png" 
                                    alt="Imagem de celular"/>
                            </div>
                            <br>
                            <div class="home_sec2_conteudo2">
                                 <img src="../assets/Home_assets/W.png" 
                                    alt="Imagem de celular"/>
                                <p>
                                    Desenvolvemos tambem sites desenvolvendo habilidade 
                                    de Front-end e Back-end. Alem de trabalho em equiupe 
                                    e metodologias ageis como scrum
                                </p>
                            </div>
                            <br>
                            <div class="home_sec2_conteudo3">
                                <p>
                                    Participamos e incentivamos os mebros a participarem de
                                    Hackatoons, que são eventos onde desenvolvemos um 
                                    site ou app ou desafios de logica, em um determinado tempo, 
                                    nos quais o tempo e o trabalho em equipe é essencial. 
                                    Nestes eventos são os mais arduos e os que nos ajudam 
                                    mais a desenvolvermos nossas habilidades como programadores.
                                </p>
                                 <img src="../assets/Home_assets/rosto.png" 
                                    alt="Imagem de celular"/>
                            </div>
                        </div>
                    </div>
            </section>
        </body>
    </div>
</template>

<script>
import { BIconList } from 'bootstrap-vue';

export default {
    name: 'Home',
    components: {
        BIconList
    }
}
</script>

<style>
    .barra_superior{
        height: 70px;
        width: 100%;
        color: #FFFFFF;
        background-color: #4E98D0;
        position: fixed;
    }

    .conteudo_barra{
        padding-top: 5px;
        padding-bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        line-height: 33px;
    }

    .separador{
        font-size: 38px;
    }

    .home_sec1{
        height: 698px;
        width: 100%;
        color: #FFFFFF;
        background-color: #16558B;
        display: flex;
        justify-content: space-around;
    }

    .home_sec1_principal{
        margin-top: 170px;
    }

    .home_sec1_titulo{
        font-size: 48px;
    }

    .home_sec1_btn{
        height: 70px;
        width: 370px;
        margin-top: 100px;
        border-radius: 20px;
        font-family: arimo, Modulus-Bold, Arial, Helvetica, sans-serif;;
        font-weight: 700;
        font-size: 28px;
        color: #FFFFFF;
        background-color: #F4DC74;
    }

    .home_sec2{
        margin-left: 135px;
        color: black;
    }

    .home_sec2_linha {
        width: 70px;
        border-top: 3px solid #000000;
    }

    .home_sec2_titulo{
        margin-bottom: 50px;
    }

    .home_sec2_conteudo{
        display: flex;
        flex-direction: column;
    }
    
    .home_sec2_conteudo *{
        display: flex;
        line-height: 28px;
        font-size: 20px;
    }

    .home_sec2_conteudo img{
        height: 200px;
        width: 200px
    }

    .home_sec2_conteudo p{
        max-width: 900px;
    }
</style>