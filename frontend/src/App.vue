<template>
  <div id="app">
    <Home />
    <Sobre />
    <FaleConosco />
  </div>
</template>

<script>
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import FaleConosco from './pages/FaleConosco';

export default {
  name: 'App',
  components: {
    Home,
    Sobre,
    FaleConosco
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
</style>
