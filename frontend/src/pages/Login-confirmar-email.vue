<template>
  <body>
        <div class="login-body">
            <div class="login-card">
                <div class="login-card-top">
                    <img src="../assets/Sobre_assets/Logo CS.png" alt="Logo CS">
                    <p>Um email de confirmação foi enviado para:</p>
                    <p>[Email]</p>
                    <div class="label-insira-o-codigo">Insirá o código de validação:</div>
                </div>
                <div class="login-card-inputs">
                    <div class="codigo-email-input">
                        <input type="text" maxlength="1">
                        <input type="text" maxlength="1">
                        <input type="text" maxlength="1">
                        <input type="text" maxlength="1">
                        <input type="text" maxlength="1">
                        <input type="text" maxlength="1">
                    </div>
                </div>
                <div class="login-card-botton">
                    <p v-on:click="novoCodigo">Enviar outro código</p>
                </div>
                <div class="login-card-button">
                    <button class="home_sec1_btn">Enviar</button>
                </div>
                <div class="login-card-botton">
                    <router-link to="Login"><p>Fazer login</p></router-link>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
export default {
    name: 'Confirmar-email',
    methods: {
        novoCodigo() {
            alert('Novo codigo enviado!... ou será que não?')
        }
    }
}
</script>

<style scoped>
    .login-card-top p {
        font-size: clamp(0.3rem, 1.4vw,2rem) !important;
    }

    .login-card-top .label-insira-o-codigo {
        margin-top: 4vh;
        font-size: clamp(0.3rem, 1.2vw,2rem) !important;
        color: #16558B;
        margin-bottom: 1.5vh;
    }

    .login-card-inputs .codigo-email-input {
        text-align: center;
    }

    .login-card-inputs .codigo-email-input input {
        width: 20px;
        padding: 2px;
        margin: 0.5vw;
        text-align: center;
        border-width: 8px;
    }

    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }
</style>