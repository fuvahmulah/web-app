<template>
<!--  <div class="w-screen h-screen bg-white flex ">-->
    <div class="absolute top-0 left-0  w-full bg-white h-full p-6 ">
      <h4 class="text-xl font-bold leading-none text-gray-800">Explore</h4>
      <h1 class="font-sans text-4xl font-bold leading-none text-gray-800 tracking-wide">Fuvahmulah</h1>

      <flex-row>
        <dashboard-icon title="Food" icon="cutlery" bg-color="bg-blue-500" icon-color="text-white"></dashboard-icon>
        <dashboard-icon title="Attractions" icon="attraction" bg-color="bg-orange-500" icon-color="text-white"></dashboard-icon>
        <dashboard-icon title="Shops" icon="shop" bg-color="bg-red-500" icon-color="text-white"></dashboard-icon>
        <dashboard-icon title="Mosques" icon="mosque" bg-color="bg-green-500" icon-color="text-white"></dashboard-icon>
      </flex-row>
      <flex-row>
        <dashboard-icon title="Stay" icon="accommodation" bg-color="bg-blue-500" icon-color="text-white"></dashboard-icon>
        <dashboard-icon title="Services" icon="telephone" bg-color="bg-pink-500" icon-color="text-white"></dashboard-icon>
        <dashboard-icon title="Maps" icon="direction" bg-color="bg-purple-600" icon-color="text-white"></dashboard-icon>
        <dashboard-icon title="Add Place" icon="marker" bg-color="bg-gray-500" icon-color="text-white"></dashboard-icon>
      </flex-row>

      <div class="mt-6">
        <h4 class="text-xl font-bold leading-none text-gray-800 mb-6">Popular this week</h4>

        <div class="md:flex bg-red-100 rounded-xl p-6">
              <img class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="avatar.jpg">
              <div class="text-center md:text-left">
                <h2 class="text-lg">Erin Lindford</h2>
                <div class="text-purple-500">Customer Support</div>
                <div class="text-gray-600">erinlindford@example.com</div>
                <div class="text-gray-600">(555) 765-4321</div>
              </div>
          </div>

      </div>

    </div>
<!--  </div>-->
</template>

<script>
  import FlexRow from "./FlexRow";
  import Icon from "./Icon";
  import DashboardIcon from "./DashboardIcon";
  export default {
    name: 'Explore',
    components: {DashboardIcon, Icon, FlexRow}
  }
</script>
