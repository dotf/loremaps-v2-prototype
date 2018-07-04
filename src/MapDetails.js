import React, {Component} from 'react';
import FantasyMap from './FantasyMap';
import maps from './data/maps';

class MapDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            map: null
        };
    }

    componentDidMount() {
        const map = maps.find(x => x.id === this.props.match.params.id);
        this.init(map);
    }

    componentDidUpdate(prevProps) {
        const oldId = prevProps.match.params.id;
        const newId = this.props.match.params.id;
        if (newId !== oldId) {
            const map = maps.find(x => x.id === this.props.match.params.id);
            this.init(map);
        }
    }

    init(map) {
        if (this.state.map) {
            this.state.map.remove();
        }
        const options = {
            map: {
                minZoom: 0,
                maxZoom: 6
            },

            image: {
                width: map.width,
                height: map.height,
                TilesUrl: map.tilesUrl
            }
        };

        const fantasyMap = new FantasyMap();
        const createdMap = fantasyMap.initialize(options);
        this.setState({
            map: createdMap
        });
    }
    render() {

        return (
            <div className="map" id="map"/>
        );
    }
}

export default MapDetails;
