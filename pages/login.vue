<template>
  <div class="h-screen w-screen flex justify-center items-center">
    <form class="flex flex-row">
      <input type="email" v-model="username">
      <input type="password" v-model="password">
    </form>
    <button @click="$auth.loginWith('laravel.passport')">Login</button>
  </div>
</template>
<script>
  export default {
    name: 'Login',

    data() {
      return {
        username: 'waddayhassan@gmail.com',
        password: 'nothing',
      }
    },
    mounted() {
    },
    methods: {
      async login() {
        try {
          await this.$auth.loginWith('laravel.passport', {
            data: {
              "username": this.username,
              "password": this.password
            }
          }).catch(e => {
            console.log('error login', e)
          });
          if (this.$auth.loggedIn) {
            console.log('lgged in')
          }
        } catch (e) {
          console.log('incorrect login details')
        }
      },
      check(){
        console.log(this.$auth.loggedIn)
      },
      logout() {
        this.$auth.logout()
      },
    }
  }
</script>
