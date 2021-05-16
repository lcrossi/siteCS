<template>
    <div>
        <head>
            <title>Fale Conosco</title>
        </head>
        <body>
            <section>
                <div class="container_sobre">
                    <div class="sobre_sec1">
                    <br/>
                        <div class="linha_sec1"></div>
                        <div class="sobre_sec1_titulo">Entre em contato conosco</div>
                        <div style="width: 70vw; display: grid; grid-template-columns: 40% 40%;">
                        <div class="FaleConoscoComponent">
                            <p>Nome:</p>
                            <input id="FaleConoscoNome" type="text" placeholder="ex: Fernando"/>
                        </div>
                        <div class="FaleConoscoComponent">
                            <p>Sobrenome:</p>
                            <input id="FaleConoscoSobrenome" type="text" placeholder="ex: Zagatto Penha"/>
                        </div>
                        <div class="FaleConoscoComponent">
                            <p>Instituição / Empresa:</p>
                            <input id="FaleConoscoInstituicao" type="text" placeholder="ex: IEEE CS - Guaratinguetá"/>
                        </div>
                        <div class="FaleConoscoComponent">
                            <p>E-mail:</p>
                            <input id="FaleConoscoEmail" type="text" placeholder="ex: csguara@gmail.com"/>
                        </div>
                        <div class="FaleConoscoComponent" style="grid-column: span 2;">
                            <p>Descrição do Projeto e Instituição:</p>
                            <textArea rows="4" id="FaleConoscoDescricaoProjeto" type="text" placeholder="ex: Olá, meu nome é C3PO e eu gostaria de conversar sobre uma parceria/projeto/*assunto* com o propósito de....."/>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            
            <section>
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
        font-size: 20% !important
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

    .FaleConoscoComponent {
        width: 90%;
        padding-bottom: 10vh;
    }
 
</style>