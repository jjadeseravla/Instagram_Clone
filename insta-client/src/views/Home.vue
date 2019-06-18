<template>
  <div>
    Home Page
    <button @click="logout">Log out</button>
  </div>
</template>


<script>
export default {
  methods: {
    logout() {
      this.$store.commit('logout');
    }
  }
}
</script>

<style>
</style>
