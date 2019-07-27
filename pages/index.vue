<template>

  <div class="w-screen h-screen">
    <div id="map" class="w-full h-full"></div>
    <div class="fixed top-0 left-0  w-full bg-dim h-full" v-if="searching" @click="searching = false"></div>
<!--TODO:: dashbard/explore show-->
    <button class="absolute mr-3 mt-3 right-0 top-0 rounded-full shadow-fvm" @click="dashboard = true" v-if="!searching">
      <icon icon="android-menu" class="h-6 text-gray-600"></icon>
    </button>
    <explore v-show="dashboard" @close="close"></explore>

    <search-result v-if="searching" :typing="userTyping"></search-result>
    <div class="absolute top-0 left-0 w-screen h-screen pointer-events-none">
      <div class="absolute bottom-0 flex w-full">
        <search-bar @blur="blur" @typing="typing"></search-bar>
      </div>
    </div>

  </div>
</template>

<script>
import SearchBar from "~/components/SearchBar";
import Explore from "../components/Explore";
import SearchResult from "../components/SearchResult";
import Icon from "../components/Icon";
let map;
export default {
  components: {Icon, SearchResult, Explore, SearchBar},

  data() {
    return {
      dashboard: true,
      searching: false,
      userTyping: false
    }
  },
  mounted() {

    let scriptLoaded = document.getElementById('gMapsScript');

    if (scriptLoaded === null) {
      let apiKey = process.env.GOOGLE_MAPS_API_KEY;
      let googleMapScript = document.createElement('script');
      googleMapScript.src = `//maps.googleapis.com/maps/api/js?key=${apiKey}`;
      googleMapScript.id = 'gMapsScript';
      googleMapScript.onload = this.initMap;
      document.getElementsByTagName('head')[0].appendChild(googleMapScript);
    }
  },

  methods: {
    typing(val) {
      this.userTyping = val;
    },
    blur() {
      this.dashboard = false;
      this.searching = true;
    },
    close() {
      this.dashboard = false;
    },
    initMap: () => {
      /**
       * @type {google.maps.Map}
       */

      let mapStyle = [
        {
          "featureType": "poi",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
      ];

      let styledMap = new google.maps.StyledMapType(mapStyle, {name: 'fvm_map'});

      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -0.294591, lng: 73.4198885},
        zoom: 15,
        mapTypeId: 'terrain',
        disableDefaultUI: true,
        mapTypeControlOptions: {
          mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
            'fvm_map']
        }
      });

      map.mapTypes.set('fvm_map', styledMap);
      map.setMapTypeId('fvm_map');

      // infoWindow = new google.maps.InfoWindow;

      // let script = document.createElement('script');
      // This example uses a local copy of the GeoJSON stored at
      // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
      // script.src = '/data';
      // document.getElementsByTagName('head')[0].appendChild(script);
    },
  }
}
</script>

<style>

</style>
