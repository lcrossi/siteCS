<template>
    <div id="LangingPage">
        <Home />
        <Sobre />
        <FaleConosco />
    </div>
</template>

<script>
import Home from './Home';
import Sobre from './Sobre';
import FaleConosco from './FaleConosco';

export default {
    name: 'LangingPage',
    components: {
        Home,
        Sobre,
        FaleConosco
  }
}
</script>

<style>

</style>