<template>
  <input type="text" v-model="keyword" placeholder="Search addresses, shops, etc" class="w-5/6 mx-auto mb-6 rounded-full h-12 pointer-events-auto shadow-md focus:outline-none pl-12 pr-6 text-sm">
</template>

<script>
  export default {
    name: 'SearchBar',

    data() {
      return {
        keyword: null,
      }
    }
  }
</script>

<style scoped>

</style>
