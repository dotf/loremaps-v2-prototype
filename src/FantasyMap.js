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

        map.setView(rc.unproject([0, 0]), 4);
        return map;
    }
}

export default FantasyMap;