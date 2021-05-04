<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './pages/Home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
* {
  font-family: Modulus-Bold, Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  font-size: 32px;
}

@font-face{
  font-family: "Modulus";
  src: url(./assets/Modulus/Modulus.ttf)
}

@font-face{
  font-family: "Modulus-Bold";
  src: url(./assets/Modulus/Modulus-Bold.otf)
}
</style>
