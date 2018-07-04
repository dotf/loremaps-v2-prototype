import React, {Component} from 'react';
import FantasyMap from './FantasyMap';

class MapDetails extends Component {

    componentDidMount() {
        this.init();
    }

    init() {
        const options = {
            map: {
                minZoom: 0,
                maxZoom: 6
            },

            image: {
                width: 4763,
                height: 3185,
                TilesUrl: '//loremaps.github.io/LoreMaps-Faerun-Tiles/Tiles',
                meterPerPixel: 1287.473,
                attribution: 'Map data <a href="http://www.pocketplane.net/">Pocket Plane Group</a>'
            }
        };

        const map = new FantasyMap();
        map.initialize(options);
    }
    render() {

        return (
            <div className="map" id="map"/>
        );
    }
}

export default MapDetails;
