<template>
  <div>test</div>
</template>

<script>
    export default {
        middleware: ['auth'],
        name: "test",

        watch: {
            $route() {
                console.log('query', this.$query.route)
            }
        },

        mounted() {
            console.log(this.$auth.user)
        }
    }
</script>

<style scoped>

</style>
