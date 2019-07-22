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

  data() {
    return {
      form: {
        grant_type: 'password',
        client_id: 2,
        client_secret: 'XAIhss9KEVnvfXlauXtNmdUFzAt6Y9cUxnsxUw1a',
        username: 'waddayhassan@gmail.com',
        password: 'nothing',
        scope: ''
      },
      access_token: null
    }
  },

  computed: {
    header() {
      return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.access_token
      }
    }
  },
  mounted() {

    //TODO:: remove this after client setups
    this.loginUser();

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

    async loginUser() {
      await this.$axios.$post('https://maps-api.app/oauth/token', this.form)
        .then(result => {
          console.log(result.access_token)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style>

</style>
