<template>
    <h1>Here the Page.vue</h1>
      <div>
        <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
      </div>
</template>

<script>
    export default {
        props:['blok']
    }
</script>