<template>
    <div id="app">
        <div class="shine" v-shine></div>
        <div class="shine big" v-shine></div>
    </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style lang="scss">
    html, body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        padding: 20px;
        box-sizing: border-box;
    }

    .shine {
        display: inline-block;
        margin-right: 20px;
        height: 200px;
        width: 100px;
        background: #2c3e50;

        &.big {
            height: 400px;
            width: 300px;
        }
    }
</style>
