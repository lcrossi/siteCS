<template>
    <div>
        <head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
            <link rel="icon" href="./images/Unificado1.png">
            <title>Fale Conosco</title>
        </head>
        <body>
            <section id="sec_contato">
                <div class="container_blue imagem_de_fundo">
                    <div class="sobre_sec1">
                    <br/>
                        <div class="linha_sec1"></div>
                        <div class="sobre_sec1_titulo">Entre em contato conosco</div>
                        <form>
                            <div style="width: 55vw; display: grid; grid-template-columns: 50% 50%;">
                            <div class="fale_conosco_component">
                                <p>Nome:</p>
                                <input name="FaleConoscoNome" type="text" placeholder="ex: Fernando"/>
                            </div>
                            <div class="fale_conosco_component">
                                <p>Sobrenome:</p>
                                <input name="FaleConoscoSobrenome" type="text" placeholder="ex: Zagatto Penha"/>
                            </div>
                            <div class="fale_conosco_component">
                                <p>Instituição / Empresa:</p>
                                <input name="FaleConoscoInstituicao" type="text" placeholder="ex: IEEE CS - Guaratinguetá"/>
                            </div>
                            <div class="fale_conosco_component">
                                <p>E-mail:</p>
                                <input name="FaleConoscoEmail" type="text" placeholder="ex: csguara@gmail.com"/>
                            </div>
                            <div class="fale_conosco_component" style="grid-column: span 2;">
                                <p>Descrição do Projeto e Instituição:</p>
                                <textArea rows="4" name="FaleConoscoDescricaoProjeto" type="text" placeholder="ex: Olá, meu nome é C3PO e eu gostaria de conversar sobre uma parceria/projeto/*assunto* com o propósito de....."/>
                            </div>
                            <div style="grid-column: span 2; width: 90%; display: flex; place-content: center">
                                <button type="submit" style="background-color: orange; border: orange 2px solid; width: 50%;" >Enviar</button>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </section>
            
            <section id="sec_venha_nos_visitar"> 

                <div class = "container_white">
                    <br>
                    <div class = "linha_titulo"></div>
                    <div class = "titulo_proj">Venha nos visitar</div> 
                    <br>
                    <div style="margin-bottom: 10vh; display: flex; align-content: space-between">
                        <div style="width: 60vw; display: grid; grid-template-columns: 100%;">
                            <div class="fale_conosco_topic">
                                <i class="material-icons">location_on</i>
                                <p>Av. Dr. Ariberto Pereira da Cunha, 333</p>
                            </div>
                            <div class="fale_conosco_topic">
                                <i class="material-icons">phone</i>
                                <p>(10) 98765-4321</p>
                            </div>
                            <div class="fale_conosco_topic">
                                <i class="material-icons">email</i>
                                <p>fzpenha@gmail.com</p>
                            </div>
                            <div class="fale_conosco_topic">
                                <i class="material-icons">schedule</i>
                                <p>08:00 às 18:00</p>
                            </div>
                        </div>
                        <img style="display: flex; place-self: center; width: 80%; heigth: 80%;" src="../assets/FaleConosco_assets/mapa_localizacao.jpg" />
                    </div>
                </div>
                <div class = "container_yellow">
                    <br>
                    <br>
                    <div style="display: grid; grid-template-columns: 100%; width: 100%; place-items: center;">
                        <img src="../assets/FaleConosco_assets/logo CS.png" />
                        <br>
                        <div style="display: flex; align-items: center; width: 20%; justify-content: space-between">
                            <a href="https://www.linkedin.com/company/ieee-computer-society-guaratingueta/"><img src="../assets/FaleConosco_assets/linkedinIcon.png" /></a>
                            <a href="https://www.instagram.com/cs_guara/"><img src="../assets/FaleConosco_assets/instagramIcon.png" /></a>
                            <a href="https://www.facebook.com/CSGUARATINGUETA/"><img src="../assets/FaleConosco_assets/facebookIcon.png" /></a>
                            <a href="https://www.youtube.com/channel/UCQbb5m7b-NdF8EX7Se6BANw"><img src="../assets/FaleConosco_assets/youtubeIcon.png" /></a>
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
    body {
        font-size: 20% !important;
    }

    button {
        border-radius: 10px;
    }
    
    input, textArea {
        background-color: transparent;
        border-color: transparent;
        border-bottom: 1.5px orange solid !important;
        width: inherit;
        color: #ffffff;
    }

    ::placeholder {
        color: lightgray;
    }

    .fale_conosco_component {
        width: 90%;
        padding-bottom: 10vh;
    }

    .intersectionImg {
        height: 100%;
        width: 100%;
        background-color: #16558B;
    }

    .fale_conosco_topic {
        display: flex !important;
        height: 5vh; 
        align-items: center;
    }

    .imagem_de_fundo {
        background-image: url('../assets/FaleConosco_assets/Intersect (forma amarela).png');
        background-repeat: no-repeat;
        background-position: right;
        background-size: 40%
    }
 
</style>