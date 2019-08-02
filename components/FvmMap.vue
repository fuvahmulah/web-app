<template>
    <div id="map" class="w-full h-full"></div>
</template>

<script>
    import debounce from 'lodash.debounce';
    let map;
    export default {
        name: 'FvmMap',

        props: {
            latitude: {
                type: Number,
                required: false,
                default: function() {
                    return -0.294591
                }
            },
            longitude: {
                type: Number,
                required: false,
                default: function() {
                    return 73.4198885
                }
            },
            zoom: {
                type: Number,
                required: false,
                default: function() {
                    return 15
                }
            },
            neighboursTriggerLevel: {
                type: Number,
                required: false,
                default: function() {
                    return 18
                }
            }
        },

        watch: {
            zoom: {
                handler(val) {
                    map.setZoom(val);
                    this.zoomLevel = val;
                    if (this.zoomLevel >= this.neighboursTriggerLevel) {
                        this.fetch();
                    }
                }
            },
            center: {
                handler(val) {
                    if (this.zoomLevel >= this.neighboursTriggerLevel) {
                        this.fetch();
                    }
                }
            }
        },

        data() {
            return {
                markers: [],
                center: {
                    lat: this.latitude,
                    lng: this.longitude
                },
                zoomLevel: 15,
                options:  {
                    mapTypeId: 'terrain',
                    disableDefaultUI: true,
                    mapTypeControls: {
                        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                            'fvm_map']
                    }
                },
            }
        },

        methods: {
            setCenter(center) {
                let cnt = {
                    lat: center.lat(),
                    lng: center.lng()
                }
                this.$set(this, 'center', cnt);
            },
            setZoom(zoom) {
                this.$set(this, 'zoomLevel', zoom);
            },

            fetchNeighbour() {

                this.markers = [];

                this.$axios.$get(`/api/markers/neighbors?lat=${this.center.lat}&lon=${this.center.lng}`)
                    .then(this.populateNeighbours)
                    .catch(() => {

                    })
            },
            populateNeighbours(neighbours) {
                console.log(neighbours)
                return;
                if (Array.isArray(neighbours.features) && neighbours.features.length) {
                    neighbours.features.forEach(neighbour => {
                        let marker = new google.maps.Marker({
                            position: { lat: parseFloat( neighbour.latitude ), lng: parseFloat( neighbour.longitude ) },
                            map: this.map
                        });
                        this.markers.push( marker );
                    })
                }
            },

            clearNeighbour() {
                for( let i = 0; i < this.markers.length; i++ ){
                    this.markers[i].setMap( null );
                }
            },
            initMap() {
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
                    center: {
                        lat: this.latitude,
                        lng: this.longitude
                    },
                    zoom: this.zoom,
                    ...this.options
                });

                map.mapTypes.set('fvm_map', styledMap);
                map.setMapTypeId('fvm_map');

                let self = this;
                map.addListener('zoom_changed', function() {
                    self.zoomLevel = map.getZoom();
                   self.setZoom(map.getZoom());
                });
                map.addListener('center_changed', function() {
                   self.setCenter(map.getCenter());
                });


                // infoWindow = new google.maps.InfoWindow;

                // let script = document.createElement('script');
                // This example uses a local copy of the GeoJSON stored at
                // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
                // script.src = '/data';
                // document.getElementsByTagName('head')[0].appendChild(script);
            },
        },

        created() {
            //wait for event to finish before sending request to server
            this.fetch = debounce(this.fetchNeighbour, 500)
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

            this.clearNeighbour();

            if (this.zoomLevel >= this.neighboursTriggerLevel) {
                this.fetch();
            }
        }
    }
</script>