<template>
  <div>test protected route</div>
</template>

<script>
    export default {
        middleware: ['auth'],
        name: "test",

        mounted() {
            console.log(this.$auth.user)
        }
    }
</script>

<style scoped>

</style>
