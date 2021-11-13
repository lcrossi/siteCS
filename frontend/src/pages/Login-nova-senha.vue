<template>
    <body>
        <div class="login-body">
            <div class="login-card">
                <div class="login-card-top">
                    <img src="../assets/Sobre_assets/Logo CS.png" alt="Logo CS">
                    <p>Insira sua nova senha</p>
                </div>
                <div class="login-card-inputs">
                    <input type="text" name="input-senha" id="" placeholder="Senha">
                    <input type="text" name="input-confirmar-senha" id="" placeholder="Confirmar senha">
                </div>
                <div class="login-card-button">
                    <button class="home_sec1_btn">Enviar</button>
                </div>
                <div class="login-card-botton">
                    <router-link to="Login"><p>Fazer login</p></router-link>
                    <router-link to="Cadastro"><p>Cadastrar-se</p></router-link>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
export default {

}
</script>

<style>

</style>