<template>
  <div class="relative w-5/6 mx-auto mb-6">
    <input type="text" @focusin="$emit('blur', true)" v-model="keyword" placeholder="Search addresses, shops, etc" class="w-full rounded-full h-12 pointer-events-auto shadow-balance focus:outline-none pl-12 pr-6 text-sm absolute bottom-0 z-50">

    <div class="h-6 w-6 absolute z-50" style="left: 15px;bottom: 13px;">
      <icon icon="search" class="text-gray-300"></icon>
    </div>
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
