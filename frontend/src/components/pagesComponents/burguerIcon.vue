<template>
    <div class="mobile_menu">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    </div>
</template>

<script>
</script>

<style>
    .mobile_menu{
        /* display: none; */
        cursor: pointer;
        transition: 0.3s;
    }

    .mobile_menu:hover{
        opacity: 0.7;
    }

    .mobile_menu div{
        width: 32px;
        height: 3px;
        background: #ffff;
        margin: 7px;
    }
</style>