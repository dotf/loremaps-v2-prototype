import L from 'leaflet';
import RasterCoords from 'leaflet-rastercoords';
L.RasterCoords = RasterCoords;

class FantasyMap {
    constructor() {
        this.options = {

            map: {
                minZoom: 0,
                maxZoom: 5
            },

            unproject: {
              coords: [0, 0],
              level: 4
            },

            image: {
                width: 4763,
                height: 3185,
                TilesUrl: '@Url.Content("~/images/maps/FaerunTiles")',
                meterPerPixel: 1287.473,
                attribution: ''
            }

        };
    }

    initialize(options) {
        Object.assign(this.options, options);
        const map = L.map('map', {
            minZoom: this.options.map.minZoom,
            maxZoom: this.options.map.maxZoom,
            zoomControl: false
        });

        const rc = new L.RasterCoords(map, [this.options.image.width, this.options.image.height]);
        rc.setMaxBounds();
        const southWest = rc.unproject([0, rc.height]);
        const northEast = rc.unproject([rc.width, 0]);
        const bounds = new L.LatLngBounds(southWest, northEast);

        map.fitBounds(bounds);
        // get the bounds
        L.tileLayer(this.options.image.TilesUrl + '/{z}/{x}/{y}.png', {
            noWrap: true,
            bounds: bounds
        }).addTo(map);

        // this is used for adding overlays
        const layerControl = L.control.layers(null, null, { position: 'bottomright' }).addTo(map);

        // set position of zoom control
        const zoomControl = new L.Control.Zoom({ position: 'bottomright' }).addTo(map);
        const poiLayers = L.layerGroup().addTo(map);

        const geojsonOpts = {

            // correctly map the geojson coordinates on the image
            coordsToLatLng: function (coords) {
                return rc.unproject(coords);
            },

            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, {
                    opacity: 0.7,
                    title: feature.properties.name
                })
            },

            onEachFeature: function onEachFeature(feature, layer) {
                layer.on({
                    click: function (e) {
                        // TODO: try harder here
                    }
                });
            }

        };

        if (options.data) {
            options.data.forEach(d => {
                fetch(`/data/${options.id}/${d}.json`)
                    .then(res => res.json())
                    .then(data => {
                        const geoLG = L.geoJson(data, geojsonOpts);

                        poiLayers.addLayer(geoLG);

                        layerControl.addOverlay(geoLG, d);
                    });
            });
        }

        map.setView(rc.unproject(this.options.unproject.coords), this.options.unproject.level);
        return map;
    }
}

export default FantasyMap;