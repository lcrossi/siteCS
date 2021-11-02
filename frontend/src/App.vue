<template>
  <div id="app">
    <nav id="App_nav">
      <router-link to="/"><img alt="Logo CS" src="./assets/Home_assets/Logo CS.png" /></router-link>
      <ul class="nav_lista" id="lista_lateral">
        <li><router-link to="/">Home</router-link></li>
        <li class="nav_separador">|</li>
        <li><a @click="section_scroll('sec_descricao')"> Projetos </a></li>
        <li class="nav_separador">|</li>
        <li><a @click="section_scroll('sec_projetos')"> Destaques </a></li>                        
        <li class="nav_separador">|</li>
        <li><a @click="section_scroll('sec_sobre_nos')"> Sobre nós </a></li>
        <li class="nav_separador">|</li>
        <li><a @click="section_scroll('sec_contato')"> Contato </a></li>
        <li class="nav_separador">|</li>  
        <li><a @click="section_scroll('sec_venha_nos_visitar')"> Localização </a></li>
        <li class="nav_separador">|</li>  
        <li><router-link to="/Login">Login</router-link></li>  
      </ul>
      <div v-on:click="show_hide_lateral_nav" id="BurguerIcon"><BurguerIcon/></div> 
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import BurguerIcon from './components/pagesComponents/burguerIcon'

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
          } else {
            link.style.animation = `navLinkFadeOut ease-out ${index/8 + 0.15}s`; //Delay to move out of screen
            setTimeout( function(){ link.style.animation = "" }, 500 );
          }
        }
      })
    },

    section_scroll: function(id) {
      document.getElementById(id).scrollIntoView();
    }
  }
}
</script>

<style>
* {
  font-family: Modulus-Bold, Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  font-size: 30px;
}

a {
  color: #FFFF;
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;
}

a:hover {
  opacity: 0.7;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #4E98D0;
  height: 10vh;
}

@font-face{
  font-family: "Modulus";
  src: url(./assets/Modulus/Modulus.ttf)
}

@font-face{
  font-family: "Modulus-Bold";
  src: url(./assets/Modulus/Modulus-Bold.otf)
}

.container_blue {
  color: #FFFFFF;
  background-color: #16558B;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding-bottom: 10vh;
  padding-left: 10vw;
  padding-right: 10vw;
}
    
.container_yellow {
  color: #FFFFFF;
  background-color: #e0c757;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding-bottom: 10vh;
  padding-left: 10vw;
  padding-right: 10vw;
}

.container_white{
  color: #000000;
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding-bottom: 10vh;
  margin-left: 10vw;
  margin-right: 10vw;
}

body{ /* prevents scroll bar */
            overflow-x: hidden !important;
        }
    
#App_nav{
    z-index: 2;
    box-shadow: 15px black;
    width: 100%;
}

.nav_lista{
  list-style: none;
  display: flex;
  align-items: center;
  z-index: 2;
}

.nav_lista li{
  letter-spacing: 2px;
  margin-left: 24px;
  color: #FFFF;
}

.nav_lista a {
  font-size: clamp(0.3rem,2vw,2rem);
}

.nav_separador{
  font-size: clamp(0.3rem,2.2vw,2rem);
  color: #FFFF;
}

.textos_barra div, .textos_barra img{
  display: flex;
  justify-content: space-between;
}


#BurguerIcon{
  display: none;
}

@media(max-width: 1200px){
  body{ /* prevents scroll bar */
    overflow-x: hidden;
  }

  #App_nav{
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    opacity: 95%;
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
