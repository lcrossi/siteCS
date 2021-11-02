<template>
    <div>
        <head>
            <title>Home</title>
        </head>
        <body>
            <section id="sec_home">
                <div class="home_sec1">
                    <div class="home_sec1_principal">
                        <div class="home_sec1_titulo">
                            Computer Society
                        </div>
                        <br/>
                        <div class="home_sec1_conteudo">
                            <p>Somos uma extensão capitulo do IEEE</p>
                            <p>da Feg-Unesp, voltados</p>   
                            <p>principalmente para a area de TI.</p> 
                        </div>
                        <button class="home_sec1_btn">Conheça mais sobre nós</button>
                    </div>
                    <div class="home_sec1_imgs">
                        <div class="home_sec1_img_amarela">
                            <img src="../../assets/Home_assets/forma_amarela.png" alt="Forma amarela de fundo">
                        </div>
                        <div class="home_sec1_img_azul">
                            <img src="../../assets/Home_assets/forma_azul_clara.png" alt="Forma amarela de fundo">
                        </div>
                    </div>
                </div>
            </section>
            <section id="sec_descricao">
                <div class = "container_white">
                <br>
                <div class = "linha_titulo"></div>
                <div class = "titulo_proj">o que fazemos</div> 
                        <div class="home_sec2_conteudo">
                            <div class="middle">
                                <p>
                                    Montamos projetos de apps e sites, onde trabalhamos no: <br/>
                                    Front-end, com UI, UX (testes de usabilidade) e implementação (principalmente com React e React Native - Javascript). <br/>
                                    Back-end, com a criação de bancos de dados, usando MongoDB, SQL e NodeJS. <br/>
                                    Além da gestão dos projetos usando metodologias ágeis (com foco no Scrum),
                                    através de sprints bem definidas, prazos, entregáveis e escopos.
                                </p>
                                <img src="../../assets/Home_assets/desenho_celular.png" 
                                    alt="Imagem de celular"/>
                            </div>
                            <br>
                            <br>
                            <div class="middle">
                                <img src="../../assets/Home_assets/W.png" 
                                    alt="Imagem de celular"/>
                                <p>
                                    Participamos e incentivamos os membros a participarem de Hackathons: <br/> 
                                    são eventos onde podemos desenvolver um projeto ou completar desafios de logica, 
                                    em um determinado tempo, nos quais a gestão do tempo e o trabalho em equipe é essencial. 
                                    Estes eventos são os mais árduos e os que nos ajudam a realmente mensurar e desenvolver 
                                    nossas habilidades como programadores.
                                </p>
                            </div>
                        </div>
                    </div>
            </section>
        </body>
    </div>
</template>

<script>
</script>

<style>
    .home_sec1{
        height: 698px;
        width: 100%;
        color: #FFFFFF;
        background-color: #16558B;
        display: flex;
        justify-content: space-around;
    }

    .home_sec1_principal{
        margin: 170px 0px 10px 15px; 
        z-index: 2;
    }

    .home_sec1_img_azul {
        position: absolute;
        top: 20vh;
        left: 75vw;
        z-index: 0;
    }

    .home_sec1_img_amarela{
        position: absolute;
        top: 20vh;
        left: 75vw;
        z-index: 0;
    }

    .home_sec1_titulo{
        font-size: 48px;
    }

    .home_sec1_btn{
        height: 70px;
        width: 370px;
        margin-top: 50px;
        border: none;
        border-radius: 20px;
        font-family: arimo, Modulus-Bold, Arial, Helvetica, sans-serif;
        font-weight: 700;
        font-size: 28px;
        color: #FFFFFF;
        background-color: #F4DC74;
    }

    #sec_descricao{
        z-index: 2;
    }

    .home_sec2{
        margin-left: 135px;
        color: black;
        background-color: #FFFF;
        z-index: 2;
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

    .middle {
        place-items: center;
    }
</style>