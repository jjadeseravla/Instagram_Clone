<template>
  <footer class="footer">
    <button @click="goto('/')"><i class="material-icons">home</i></button>

    <button><i class="material-icons">search</i></button>

    <button @click="goto('/newpost')"><i class="material-icons">camera</i></button>

    <button><i class="material-icons">announcement</i></button>

    <button @click="goto('/profile')"><i class="material-icons">account_box</i></button>

    <button class="logout-btn" @click="$store.commit('logout')">
      <i class="material-icons">power_off</i>
    </button>
    <!-- <button @click="goto('/login')"><i class="material-icons">log_out</i></button> -->
  </footer>
</template>

<script>
export default {
  methods: {
    goto(path) {
      this.$router.push(path);
    }
  }
}

</script>
