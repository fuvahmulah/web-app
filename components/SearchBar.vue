<template>
  <div class="relative w-5/6 mx-auto mb-6">
    <div class="h-6 w-6 absolute" style="top: 13px; left: 15px;">
      <icon icon="search" class="text-gray-300"></icon>
    </div>
    <input type="text" v-model="keyword" placeholder="Search addresses, shops, etc" class="w-full rounded-full h-12 pointer-events-auto shadow-md focus:outline-none pl-12 pr-6 text-sm">
  </div>
</template>

<script>
  import Icon from "./Icon";
  export default {
    name: 'SearchBar',
    components: {Icon},
    data() {
      return {
        keyword: null,
      }
    }
  }
</script>

<style scoped>

</style>
