<template>
    <h3>Card - storyblok API</h3>
    <div>
      Card title: {{ blok.title }}
    </div>
</template>
   
<script>
    export default {
        props:['blok']
    }
</script>