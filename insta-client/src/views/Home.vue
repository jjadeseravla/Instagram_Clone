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
      localStorage.removeItem('jwt');
      this.$router.push('/');
    }
  }
}
</script>

<style>
</style>
