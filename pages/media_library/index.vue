<template>
  <div>
       <nuxt-child />
    <h1> Media Library</h1>
    <div v-for="video in videos" :key="video.id">
       <nuxt-link :to="`/media_library/${video.id}`">{{ video.name }}</nuxt-link>
    </div>
   
  </div>
</template>

<script>
  export default {
    head:{
      title: ""
    },
    data(){
        return {
            videos:[{
                id: '16',
                name: 'Intro sixteen'
            },
            {
                id: '1',
                name: 'Intro first'
            },
            {
                id: '71',
                name: 'Intro senventy 1'
            }]
        }
    },
  }
</script>

<style lang="scss" scoped>
</style>