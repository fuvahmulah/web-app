<template>
  <div class="w-screen h-screen">
    <div id="map" class="w-full h-full"></div>

    <div class="absolute top-0 left-0 w-screen h-screen pointer-events-none">
      <div class="absolute bottom-0 flex w-full">
        <search-bar></search-bar>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "~/components/SearchBar";
let map;
export default {
  components: {SearchBar},
  mounted() {

    let scriptLoaded = document.getElementById('gMapsScript');

    if (scriptLoaded === null) {
      let googleMapScript = document.createElement('script');
      googleMapScript.src = '//maps.googleapis.com/maps/api/js?key=AIzaSyClfxQF-JQmsxueQbKW36yRy_t-w2_1r04';
      googleMapScript.id = 'gMapsScript';
      googleMapScript.onload = this.initMap;
      document.getElementsByTagName('head')[0].appendChild(googleMapScript);
    }
  },

  methods: {
    initMap: () => {
      /**
       * @type {google.maps.Map}
       */
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -0.294591, lng: 73.4198885},
        zoom: 15,
        mapTypeId: 'terrain',
        disableDefaultUI: true,
      });

      // infoWindow = new google.maps.InfoWindow;

      // let script = document.createElement('script');
      // This example uses a local copy of the GeoJSON stored at
      // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
      // script.src = '/data';
      // document.getElementsByTagName('head')[0].appendChild(script);
    }
  }
}
</script>

<style>

</style>
