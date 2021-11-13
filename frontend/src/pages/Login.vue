<template>
    <body>
        <div class="login-body">
            <div class="login-card">
                <div class="login-card-top">
                    <img src="../assets/Sobre_assets/Logo CS.png" alt="Logo CS">
                    <p>Fazer login</p>
                </div>
                <div class="login-card-inputs">
                    <input type="email" name="input-email" id="" placeholder="Email">
                    <input type="text" name="input-senha" id="" placeholder="Senha">
                </div>
                <div class="login-card-button">
                    <button class="home_sec1_btn">Enviar</button>
                </div>
                <div class="login-card-botton">
                    <router-link to="Login-recuperar-senha"><p>Esqueci minha senha</p></router-link>
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
    body .login-body {
        display: flex;
        align-items: center;
        height: 100%;
        background-color: #16558B;
    }

    .login-card {
        margin: 0 auto;
        /* margin-top: 10vh; */ 
        border-radius: 5px;
        margin-top: 8%;
        width: 30%;
        padding: 3%;
        background-color: white;
        box-shadow: 3px 4px 7px 5px rgba(0, 0, 0, 0.2);
        margin-bottom: 10%;
    }

    .login-card-top {
        display: flex;
        align-items: center;
        flex-direction: column;
        font-family: 'Modulus-Bold';
    }

    .login-card-top img {
        width: clamp(0.3rem,5.5vw,2rem);
    }
    
    .login-card-top p {
        font-size: clamp(0.3rem,2.1vw,2rem);
    }

    .login-card img {
        margin-bottom: 4vh;
    }

    .login-card-inputs {
        color: black;
    }

    .login-card-inputs input {
        width: 100%;
        margin-top: 10%;
        color: black;
        padding: 8px;
        border-radius: 5px;
        font-size: clamp(0.3rem,1.5vw,2rem);
        outline: none;
    }

    .login-card-button {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .login-card-button button {
        display: box;
        font-size: clamp(0.3rem,1.6vw,2rem);
        box-shadow: -1px 2px 5px 3px rgba(0, 0, 0, 0.2);
        height: 7vh;
        width: 14vw;
        border-radius: 7px;
    }

    .login-card-botton {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        margin-top: 15px;
        margin-bottom: 20px;
    }

    .login-card-botton p{
        font-size: clamp(0.3rem,1.0vw,2rem);
        margin-top: 15px;
        color: #4E98D0;
        cursor: pointer;
    }

    .login-card-botton p:hover {
        color: #16558B;
    }

    @media(max-width: 1200px) {
        body {
            margin-top: 10vh;
        }

        .login-body {
            height: 100vh;
        }
    }

</style>
