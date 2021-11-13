import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './pages/LandingPage/LandingPage.vue'
import LoginPage from './pages/Login.vue'
import RecuperarSenha from './pages/Login-recuperar-senha.vue'
import Cadastro from './pages/Cadastro.vue'
import NovaSenha from './pages/Login-nova-senha.vue'
import ConfirmarEmail from './pages/Login-confirmar-email.vue'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: "/",
            name: "LandingPage",
            component: LandingPage,
        },
        {
            path: "/Login",
            name: "LoginPage",
            component: LoginPage,
        },
        {
            path: "/Login-recuperar-senha",
            name: "RecuperarSenha",
            component: RecuperarSenha,
        },
        {
            path: "/Cadastro",
            name: "Cadastro",
            component: Cadastro,
        },
        {
            path: "/Confirmar-email",
            name: "Confirmar-email",
            component: ConfirmarEmail,
        },
        {
            path: "/Nova-senha",
            name: "Nova-senha",
            component: NovaSenha,
        },
       

    ]
})

