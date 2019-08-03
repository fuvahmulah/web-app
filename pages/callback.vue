<script>
    export default {
        name: "callback",
        middleware: ['auth'],

        mounted() {
            // if (this.$auth.loggedIn) {
            //     if (this.$route.query.next && isRelativeURL(this.$route.query.next)) {
            //         this.$router.push(this.$route.query.next);
            //     } else {
            //         this.$router.push('/');
            //     }
            // }
        }
    }
</script>

<style scoped>

</style>
