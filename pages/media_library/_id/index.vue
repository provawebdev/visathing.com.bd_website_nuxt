<template>
  <div>
      we are in Media {{video.name}}
      <nuxt-link :to="`/media_library/${video.id}/edit`">
      <button>Edit</button>
      </nuxt-link>
  </div>
</template>

<script>
  export default {
   props: ['video'],
   head:{
      title: "Watch"
    }
  }
</script>

<style lang="scss" scoped>
</style>