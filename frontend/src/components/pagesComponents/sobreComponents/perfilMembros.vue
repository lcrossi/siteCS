<template>
    <div class="sobre_sec2_membros">
        <div v-for="member in (ArrayMembers)" :key="member.id" class = "perfil_membro">
            <img class="foto" src="../../../assets/Sobre_assets/silhuetaPerfil.png" :alt="'foto: ' + member.nome">
            <div class = "nome">{{member.nome}}</div>
            <div class = "cargo">{{member.cargo}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        ArrayMembers: Array,
    },
}
</script>

<style scoped>
    .sobre_sec2_membros{
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%
    } 
    
    .perfil_membro{
        margin: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .foto{
        border-radius: 50%;
        background-color: #C4C4C4;
        width: 120px;
        height:100px;
        margin-bottom: 8px;
        font-size: 16px;
        box-shadow: -10px 9px 50px rgba(0, 0, 0, 0.17);
    }
    
    .nome{
        font-size: 20px;
        min-width: 200px;
        max-width: 200px;
        text-align: center;
    }

    .cargo{
        font-size: 16px;
        max-width: 200px;
        min-width: 200px;
        text-align: center;
        color:#b6b3b3;
    }
</style>