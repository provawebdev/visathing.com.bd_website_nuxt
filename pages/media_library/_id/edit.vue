<template>
  <div>
       <nuxt-child />
    <h1> Edit {{video.name}}</h1>
       <nuxt-link :to="`/media_library/${video.id}`">
      <button>Go back to show</button>
      </nuxt-link>
  </div>
</template>

<script>
  export default {
      props: ['video'],
      head:{
      title: "Edit"
    }
  }
</script>

<style lang="scss" scoped>
</style>