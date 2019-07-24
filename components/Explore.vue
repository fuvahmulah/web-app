<template>
<!--  <div class="w-screen h-screen bg-white flex ">-->
    <div class="absolute top-0 left-0  w-full bg-white h-full p-8 pt-10">
      <h4 class="text-xl font-bold leading-none text-gray-800">Explore</h4>
      <h1 class="font-sans text-4xl font-bold leading-none text-gray-800 tracking-wide">Fuvahmulah</h1>

      <flex-row>
        <dashboard-icon title="Food" icon="cutlery" bg-color="bg-blue-500" icon-color="text-white"></dashboard-icon>
        <dashboard-icon title="Attractions" icon="attraction" bg-color="bg-orange-light" icon-color="text-white"></dashboard-icon>
        <dashboard-icon title="Shops" icon="shop" bg-color="bg-red-500" icon-color="text-white"></dashboard-icon>
        <dashboard-icon title="Mosques" icon="mosque" bg-color="bg-green-light" icon-color="text-white"></dashboard-icon>
      </flex-row>
      <flex-row>
        <dashboard-icon title="Stay" icon="accommodation" bg-color="bg-blue-light" icon-color="text-white"></dashboard-icon>
        <dashboard-icon title="Services" icon="telephone" bg-color="bg-pink-light" icon-color="text-white"></dashboard-icon>
        <dashboard-icon title="Maps" icon="direction" bg-color="bg-purple-600" icon-color="text-white"></dashboard-icon>
        <dashboard-icon title="Add Place" icon="marker" bg-color="bg-gray-500" icon-color="text-white"></dashboard-icon>
      </flex-row>

      <div class="mt-12">
        <h4 class="text-xl font-bold leading-none text-gray-800 mb-6">Popular this week</h4>

        <card></card>

      </div>

    </div>
<!--  </div>-->
</template>

<script>
  import FlexRow from "./FlexRow";
  import Icon from "./Icon";
  import DashboardIcon from "./DashboardIcon";
  import Card from "./Card";
  export default {
    name: 'Explore',
    components: {Card, DashboardIcon, Icon, FlexRow}
  }
</script>
