<template>
  <div>
      <nuxt-child :video="video"/>
  </div>
</template>

<script>
  export default {
       head(){
             return {
                 title: '',
                 titleTemplate: `%s ${this.video.name} - VISAThing`
             }
         },
     data(){
        
        return {
            videos:[{
                id: '16',
                name: 'Intro sixteen'
            },
            {
                id: '1',
                name: 'Intro name one'
            },
            {
                id: '4',
                name: 'Intro name senventy one'
            }]
        }
    },
    computed:{
        video(){
            return this.videos.find(v => v.id == this.$route.params.id)
        }
    }
  }
</script>

<style lang="scss" scoped>
</style>