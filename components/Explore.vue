<template>
<!--  <div class="w-screen h-screen bg-white flex ">-->
    <div class="absolute top-0 left-0  w-full bg-white h-full p-6 ">
      <h4 class="text-xl font-bold leading-none text-gray-800">Explore</h4>
      <h1 class="font-sans text-4xl font-bold leading-none text-gray-800 tracking-wide">Fuvahmulah</h1>

      <row>
        <dashboard-icon title="Food" icon="cutlery" bg-color="bg-blue-500" icon-color="text-white"></dashboard-icon>
        <dashboard-icon title="Attractions" icon="attraction" bg-color="bg-orange-500" icon-color="text-white"></dashboard-icon>
        <dashboard-icon title="Shops" icon="shop" bg-color="bg-red-500" icon-color="text-white"></dashboard-icon>
        <dashboard-icon title="Mosques" icon="mosque" bg-color="bg-green-500" icon-color="text-white"></dashboard-icon>
      </row>
      <row>
        <dashboard-icon title="Stay" icon="accommodation" bg-color="bg-blue-500" icon-color="text-white"></dashboard-icon>
        <dashboard-icon title="Services" icon="telephone" bg-color="bg-pink-500" icon-color="text-white"></dashboard-icon>
        <dashboard-icon title="Maps" icon="direction" bg-color="bg-purple-600" icon-color="text-white"></dashboard-icon>
        <dashboard-icon title="Add Place" icon="marker" bg-color="bg-gray-500" icon-color="text-white"></dashboard-icon>
      </row>

    </div>
<!--  </div>-->
</template>

<script>
  import Row from "./Row";
  import Icon from "./Icon";
  import DashboardIcon from "./DashboardIcon";
  export default {
    name: 'Explore',
    components: {DashboardIcon, Icon, Row}
  }
</script>
