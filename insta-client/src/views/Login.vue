<template>
  <div class="login-page">
    <header>
    <h3>INSTA<span>CLONE</span></h3>
  </header>
    <div class="form-group">
      <input type="text" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholer="password"/>
      <button class="login-btn">Log In</button>
    </div>
    <footer>
      Footer
    </footer>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style lang="scss" scoped>

.login-page {
  display: flex;
  flex-direction: column;
  height: 100%;

  padding: 25px;

    h3 {
      color: #000;
      font-size: 28px;
      text-align: center;
      font-weight: 900;
      span {
        font-weight: 300;
      }
    }

    .form-group {
      flex: 1;
      display: flex;
      justify-content: center;
      flex-flow: column;

      input {
        width: 100%;
        height: 30px;
        border: 1px solid #DDD;
        margin-bottom: 5px;
        text-indent: 5px;
        background: #EEE;
        outline: none;

        &:focus {
          border: 1px solid #AAA;
        }
      }

      button {
        width: 100%;
        height: 30px;
        background: #FFCE00;
        appearance: none;
        border: none;
        outline: none;
        border-radius: 8px;

        color: #171717;
        font-size: 15px;
        font-weight: 700;
      }
    }
  }

</style>
