<template>
    <h3>Teaser - storyblok API</h3>
    <div>
      Teaser headline: {{ blok.headline }}
    </div>
</template>
   
<script>
    export default {
        props:['blok']
    }
</script>