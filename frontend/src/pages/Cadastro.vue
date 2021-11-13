<template>
    <body>
        <div class="login-body">
            <div class="login-card">
                <div class="login-card-top">
                    <img src="../assets/Sobre_assets/Logo CS.png" alt="Logo CS">
                    <p>Cadastro</p>
                </div>
                <div class="login-card-inputs">
                    <input type="email" name="input-email" id="" placeholder="Email">
                    <input type="text" name="input-username" id="" placeholder="Nome de usuário">
                    <input type="password" name="input-Senha" id="" placeholder="Senha">
                    <input type="password" name="input-ConfirmarSenha" id="" placeholder="Confirmar senha">
                </div>
                <div class="login-card-button">
                    <router-link to="Login"><button v-on:click="enviar" class="home_sec1_btn">Enviar</button></router-link>
                </div>
                <div class="login-card-botton">
                    <router-link to="Login"><p>Login</p></router-link>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
export default {
    name:  'Cadastro',
    methods: {
        enviar() {
            /*Validações...*/
            alert("Enviado... Usuário cadastrado... ou será que não?")
        }
    }
}
</script>

<style>

</style>