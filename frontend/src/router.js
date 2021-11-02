import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './pages/LandingPage/LandingPage.vue'
import LoginPage from './pages/Login.vue'

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

    ]
})

