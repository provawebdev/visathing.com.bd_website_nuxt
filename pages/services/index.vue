<template>
  <div>
    <section class="page-name text-center">
      <div class="container">
        <h1>Our Services</h1>
      </div>
    </section>
    <nuxt-child />
     <section id="visa-consultancy-wrapper">
    <Services />
     </section>
  </div>
</template>

<script>

export default {
   head() {
    return {
      title: "",
      titleTemplate: `%s ${'Services'} - VISAThing`,
    };
  },
  data() {
    return {
      videos: [],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>