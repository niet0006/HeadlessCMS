<template>
    <h2>Card component</h2>
    <div v-if="blok" class="card">
        <h2>{{ blok.title }}</h2>
        <p>{{ blok.description }}</p>
        <img src="{{ blok.image.filename }}" alt="">
        
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