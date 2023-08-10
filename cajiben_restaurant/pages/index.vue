<template>
    <h1>index.vue</h1>
    <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
    const story = await useAsyncStoryblok('about', { version: 'draft' })
</script>

<!-- <script>
  export default {
      data: function(){
          return{
              story:''
          }
      },
      created: function() {
          fetch('https://api-us.storyblok.com/v2/cdn/stories/home?version=draft&token=Iwulj9cKCpNDjQjOTItMngtt&cv=1691699995')
          .then(resp => resp.json())
          .then(data => this.story = data.story.content)
      }
  }
</script> -->