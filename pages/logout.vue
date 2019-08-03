<template>
  <div></div>
</template>

<script>
    export default {
        name: "logout",

        mounted() {
            this.$auth.logout()
        }
    }
</script>

<style scoped>

</style>
