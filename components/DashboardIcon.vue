<template>
  <div class="flex justify-center items-center flex-col w-1/4 mt-6">
    <div class="rounded-full h-16 w-16 flex items-center justify-center" :class="bgColor">
      <icon :icon="icon" class="fill h-8" :class="iconColor"></icon>
    </div>
    <h5 class="mt-2 text-sm font-medium text-gray-500">{{ title }}</h5>
  </div>
</template>

<script>
  import Icon from "./Icon";
  export default {
    name: 'DashboardIcon',
    components: {Icon},
    props: {
      iconColor: String,
      bgColor: String,
      title: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true
      }
    }
  }
</script>
