<template>
  <div class="absolute bottom-0 left-0  w-full h-auto p-8 pt-10 mb-16">
    <h4 class="text-xl font-bold leading-none text-white mb-3">Search Results</h4>
    <div class="overflow-hidden rounded-fvm shadow-fvm border bg-white">
      <div class="flex items-center justify-between leading-none p-4">
        <div class="flex">
          <img alt="Placeholder" class="rounded-lg h-10" src="https://picsum.photos/60/60/?random">
          <div class="ml-4 flex flex-col">
            <h4 class="text-md font-bold text-gray-800">Gn Atoll Education Centre</h4>
            <div class="flex mt-2 items-center">
              <icon icon="marker" class="fill w-3 text-blue-500 mr-2"></icon>
                <small class="text-gray-500">Feedhifannu Magu, Miskiymagu</small>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between leading-none p-4 border-t">
        <div class="flex">
          <img alt="Placeholder" class="rounded-lg h-10" src="https://picsum.photos/60/60/?random">
          <div class="ml-4 flex flex-col">
            <h4 class="text-md font-bold text-gray-800">Gn Atoll Education Centre</h4>
            <div class="flex mt-2">
              <icon icon="marker" class="fill w-3 text-blue-500 mr-2"></icon>
              <small class="text-gray-500">Feedhifannu Magu, Miskiymagu</small>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between leading-none p-4 border-t">
        <div class="flex">
          <img alt="Placeholder" class="rounded-lg h-10" src="https://picsum.photos/60/60/?random">
          <div class="ml-4 flex flex-col">
            <h4 class="text-md font-bold text-gray-800">Gn Atoll Education Centre</h4>
            <div class="flex mt-2">
              <icon icon="marker" class="fill w-3 text-blue-500 mr-2"></icon>
              <small class="text-gray-500">Feedhifannu Magu, Miskiymagu</small>
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
    name: 'SearchResult',
    components: {Icon}
  }
</script>
