<template>
    <h2>Teaser component</h2>
    <div v-if="blok" class="card">
        <h2>{{ blok.headline }}</h2>
    </div>

</template>

<script>
    export default {
        props:['blok']
    }
</script>

<style>
    .card{
        margin-left: 2rem;
    }
</style>