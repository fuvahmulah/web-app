<template>
  <div>
    <button @click="$auth.loginWith('laravel.passport')">Login</button>
  </div>
</template>

<script>
    import {isRelativeURL} from "../.nuxt/auth/utilities";

    export default {
        auth: false,
        name: "login",
    }
</script>

<style scoped>

</style>
