<template>
 <main class="view profile">
  <section class="profile-head">
    <strong>Name: </strong> {{ display_name }}
  </section>

  <section>
    <ImageInput v-model="avatar" @input="called">
      <div slot="activator">
        <v-avatar size="150px" v-ripple v-if="!avatar.image" class="grey lighten-3 mb-3">
          <span>Click to add avatar</span>
        </v-avatar>
        <v-avatar size="150px" v-ripple v-else class="mb-3">
          <img :src="avatar.image" alt="avatar">
        </v-avatar>
      </div>
    </ImageInput>
    <v-slide-x-transition>
      <div v-if="avatar.image && saved == false">
        <v-btn class="primary" @click="uploadAvatar" :loading="saving">Save Avatar</v-btn>
      </div>
    </v-slide-x-transition>
  </section>

    <section class="posts">
      <div class="post" v-for="post in posts" :key="post._id">

        <img :src="post.image" :alt="post.desc" class="post-image" />

      </div>
    </section>

  </main>
</template>

<script>
import ImageInput from './ImageInput.vue'
  export default {
    name: 'profile',
    data() {
      return {
        display_name: '',
        posts: [],
        avatar: null,
        saving: false,
        saved: false,
        avatar: {}
      }
    },
    components: {
      ImageInput: ImageInput
    },
    watch:{
      avatar: {
        handler: function() {
          this.saved = false
        },
        deep: true
      }
    },
    methods: {
      getProfile() {

        this.$http.post(this.$store.state.api_url + 'user/getprofile', {
          auth_token: localStorage.getItem('jwt')
        }).then(({ data }) => {
          this.display_name = data.details.display_name;
          this.avatar.image = data.details.avatar || null;
          this.posts = data.details.posts;
        })
      },

      uploadAvatar() {

        this.saving = true
        this.$http.post(this.$store.state.api_url +'user/avatar', {
          auth_token: localStorage.getItem('jwt'),
          image: this.avatar.image,
        })
        .then(response => {
          console.log(response);
          this.captured = false;
          this.cap = "";
          this.desc = "";
        })
      },
      savedAvatar() {
        this.saving = false
        this.saved = true
      },
      called(payload){
        console.log(payload.dataUrl);
        this.avatar.image = payload.dataUrl;
      }
    },
    beforeMount() {
      this.getProfile();
    }
  };

</script>
