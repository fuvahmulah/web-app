<template>
  <div class="relative w-5/6 mx-auto mb-6">
     <div class="absolute bottom-0 left-0 h-auto pb-8 pt-3 mb-16 w-full mx-auto mb-6">
        <div v-if="typing" class="p-3 text-center flex items-center justify-center">
          <icon icon="loading"></icon>
        </div>

       <template v-if="!typing && results.length">
         <h4 class="text-xl font-bold leading-none text-white mb-3">Search Results</h4>

          <div class="overflow-hidden rounded-fvm shadow-fvm border bg-white overflow-y-auto" style="max-height: 500px !important;">
            <template>
              <div v-if="results.length" v-for="(house, hIndex) in results" :key="hIndex" class="flex items-center justify-between leading-none border-b p-4">
                <div class="flex" v-if="house.properties">
                  <img alt="Placeholder" class="rounded-lg h-10" src="https://picsum.photos/60/60/?random">
                  <div class="ml-4 flex flex-col">
                    <h4 class="text-md font-bold text-gray-800">{{ house.properties.name }}</h4>
                    <div class="flex mt-2 items-center">
                      <icon icon="marker" class="fill w-3 text-blue-500 mr-2"></icon>
                      <small class="text-gray-500">{{ house.properties.address }}, {{ house.properties.district }}</small>
                    </div>
                  </div>
                </div>
              </div>

  <!--            <div class="flex items-center justify-between leading-none p-4 border-t">-->
  <!--              <div class="flex">-->
  <!--                <img alt="Placeholder" class="rounded-lg h-10" src="https://picsum.photos/60/60/?random">-->
  <!--                <div class="ml-4 flex flex-col">-->
  <!--                  <h4 class="text-md font-bold text-gray-800">Gn Atoll Education Centre</h4>-->
  <!--                  <div class="flex mt-2">-->
  <!--                    <icon icon="marker" class="fill w-3 text-blue-500 mr-2"></icon>-->
  <!--                    <small class="text-gray-500">Feedhifannu Magu, Miskiymagu</small>-->
  <!--                  </div>-->
  <!--                </div>-->
  <!--              </div>-->
  <!--            </div>-->

  <!--            <div class="flex items-center justify-between leading-none p-4 border-t">-->
  <!--              <div class="flex">-->
  <!--                <img alt="Placeholder" class="rounded-lg h-10" src="https://picsum.photos/60/60/?random">-->
  <!--                <div class="ml-4 flex flex-col">-->
  <!--                  <h4 class="text-md font-bold text-gray-800">Gn Atoll Education Centre</h4>-->
  <!--                  <div class="flex mt-2">-->
  <!--                    <icon icon="marker" class="fill w-3 text-blue-500 mr-2"></icon>-->
  <!--                    <small class="text-gray-500">Feedhifannu Magu, Miskiymagu</small>-->
  <!--                  </div>-->
  <!--                </div>-->
  <!--              </div>-->
  <!--            </div>-->
            </template>

          </div>
       </template>
      </div>
  </div>

</template>

<script>
  import Icon from "./Icon";
  export default {
    name: 'SearchResult',
    components: {Icon},

    props: {
      typing: {
        type: Boolean,
        default: false
      },
      results: {
        type: [Array,Object],
        required: true,
        default: []
      }
    }
  }
</script>
