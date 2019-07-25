<template>
  <div class="h-screen w-screen flex justify-center items-center">
    <div class="bg-white shadow-lg border rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full mr-4 ml-4">
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input class="shadow appearance-none border rounded-full w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username">
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border border-red rounded-full w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************">
        <p class="text-red text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-200 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full" type="button">
          Sign In
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
          Forgot Password?
        </a>
      </div>
      <div class="flex justify-center mt-6">
        <a href="https://maps-api.app/login/google">
          <img src="../assets/login_with_google.png">
        </a>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'Login',

    data() {
      return {
        username: null,
        password: null,
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
