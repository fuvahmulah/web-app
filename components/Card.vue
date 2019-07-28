<template>
  <div class="overflow-hidden rounded-fvm shadow-fvm border border-gray-200">
    <div class="flex items-center justify-between leading-none p-4">
      <div class="flex">
        <img alt="Placeholder" class="rounded-lg h-16" src="https://picsum.photos/60/60/?random">
        <div class="ml-4 flex flex-col">
          <h4 class="text-md font-bold text-gray-800">Gn Atoll Education Centre</h4>
          <div class="flex m-1 ml-0 items-center">
            <h6 class="text-sm font-medium mr-2 text-gray-700">School </h6><small class="rounded-fvm h-4 bg-gray-100 border px-2 text-xs text-gray-600">Education</small>
          </div>

          <div class="flex mt-2 items-start">
            <icon icon="marker" class="fill w-4 text-blue-500 mr-2"></icon>
            <div>
              <h6 class="text-md text-gray-600 font-bold">Feedhifannu Magu</h6>
              <small class="text-gray-500 text-xs">Miskiymagu</small>
            </div>
          </div>

          <div class="flex mt-2 items-start">
            <icon icon="info" class="fill w-4 text-blue-500 mr-2"></icon>
            <div>
              <small class="text-gray-500 text-xs">"Use west gate. Be aware of the flooded roads."</small>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Icon from "./Icon";
  export default {
    name: 'Card',
    components: {Icon}
  }
</script>
