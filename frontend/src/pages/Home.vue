<template>
    <div>
        <head>
            <title>Home</title>
        </head>
        <body>
            <header>
                <nav id="home_nav">
                    <a href="/"><img alt="Logo CS" src="../assets/Home_assets/Logo CS.png" /></a>
                    <ul class="nav_lista" id="lista_lateral">
                        <li><a href="/">Home</a></li>
                        <li class="nav_separador">|</li>
                        <li><a href="/">Destaques</a></li>
                        <li class="nav_separador">|</li>
                        <li><a href="/">Projetos</a></li>
                        <li class="nav_separador">|</li>
                        <li><a href="/">Sobre nós</a></li>
                        <li class="nav_separador">|</li>
                        <li><a href="/">Contato</a></li>
                        <li class="nav_separador">|</li>  
                        <li><a href="/">Localização</a></li>  
                    </ul>
                    <div v-on:click="show_hide_lateral_nav" id="BurguerIcon"><BurguerIcon/></div> 
                </nav>
            </header>
            <section id="sec_home">
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
                    <div class="home_sec1_imgs">
                        <div class="home_sec1_img_amarela">
                            <img src="../assets/Home_assets/forma_amarela.png" alt="Forma amarela de fundo">
                        </div>
                        <div class="home_sec1_img_azul">
                            <img src="../assets/Home_assets/forma_azul_clara.png" alt="Forma amarela de fundo">
                        </div>
                    </div>
                </div>
            </section>
            <section id="sec_destaques">
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
import BurguerIcon from '../components/pagesComponents/burguerIcon'

export default {
    name: 'Home',
    components: {
        BurguerIcon
    },
    methods: {
        show_hide_lateral_nav: function (){
            document.getElementById("lista_lateral").classList.toggle("active");
            let nav_links  = document.querySelectorAll(".nav_lista li");

            nav_links.forEach((link, index) => {
                if(link.classList != "nav_separador"){
                    if(link.style.animation == "" || link.style.opacity == "navLinkFadeOut ease-out"){
                        link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index/7 + 0.3}s`; //Fading speed and links' delay to move into screen
                    }else{
                        link.style.animation = `navLinkFadeOut ease-out ${index/8 + 0.15}s`; //Delay to move out of screen
                        setTimeout( function(){ link.style.animation = "" }, 500 );
                    }
                }
            })
        },
    }
}
</script>

<style>
    body{ /* prevents scroll bar */
            overflow-x: hidden !important;
        }
    
    #home_nav{
        z-index: 2;
        box-shadow: 15px black;
    }

    .nav_lista{
        list-style: none;
        display: flex;
        align-items: center;
        z-index: 2;
    }

    .nav_lista li{
        letter-spacing: 2px;
        margin-left: 32px;
    }

    .textos_barra div, .textos_barra img{
        display: flex;
        justify-content: space-between;
    }

    .nav_separador{
        font-size: 33px;
        color: #FFFF;
    }

    #BurguerIcon{
            display: none;
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

    #sec_destaques{
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
    
    @media(max-width: 1200px){
        body{ /* prevents scroll bar */
            overflow-x: hidden;
        }

        .nav_lista{
            position: absolute;
            top: 10vh;
            right: 0;
            width: 40vw;
            height: 90vh;
            background-image: linear-gradient(#4E98D0, #4e98d0ce, #4e98d09d, #4e98d070, #16558B);
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            transform: translateX(100%);
            transition: transform 0.5s ease-in 0.05s;
            z-index:3;
        }

        .nav_lista li{
            margin-left: 0;
            /* background-color: #3572a7; */
            /* background-image: linear-gradient(#4E98D0, #4e98d0be); */
            background-image: linear-gradient(to left, transparent 10%,  #f4dd74de ,  #F4DC74 ); 
            padding: 10px;
            border-radius: 70px 8px;
            opacity: 0;
        }

        .nav_lista li:hover{
            background-image: linear-gradient(to left,  #f4dd74de ,  #F4DC74 );
            border-radius: 70px 8px;
        }

        #BurguerIcon{
            display: block !important;
        }
    }

    .nav_lista.active{
        transform: translateX(0);
    }

    @keyframes navLinkFadeIn {
        from {
            opacity: 0;
            transform: translateX(50px);
        }

        to {
            opacity: 1;
             transform: translateX(0px);
        }
    }

    @keyframes navLinkFadeOut {
        from {
            opacity: 1;
            transform: translateX(0px);
        }

        to {
            opacity: 0;
            transform: translateX(50px);
        }
    }
</style>