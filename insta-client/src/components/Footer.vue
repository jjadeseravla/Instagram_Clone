<template>
  <footer class="footer">
    <button @click="goto('/')">Home</button>
    <button>Global</button>
    <button @click="goto('/newpost')">Post</button>
    <button>Notifications</button>
    <button @click="goto('/profile')">Profile</button>
    <button @click="goto('/login')">Log out</button>
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
