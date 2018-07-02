import React, { Component } from 'react';
import faerunImage from './images/Maps/faerunlarge700x400.jpg';
import gotImage from './images/Maps/GoT_speculative_map700x400.jpg';
import loreMapsLogo from './images/LoreMaps_Logo.png';
import './App.css';

class App extends Component {
  render() {
    return (

        <div>
        <div className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                            data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand">LoreMaps</a>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><a>Game Of Thrones</a></li>
                        <li><a>Faerun</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a className="glyphicon glyphicon-cog" title="Settings" data-toggle="modal"
                               data-target="#userPreferencesModal"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
            <div className="container-fluid body-content">
                <div className="container">

                    <div className="row page-header">
                        <div className="col-xs-12 col-sm-6 v-align">
                            <h1><img className="img-responsive" src={loreMapsLogo} alt="LoreMaps"/></h1>
                        </div>
                        <div className="col-xs-12 col-sm-6 v-align">
                            <h2>
                                <small>Interactive fantasy maps</small>
                            </h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <p>LoreMaps is an attempt to help organize information on fantasy maps. With LoreMaps you easily
                                complete the following activities on the fantasy world you are interested in
                                <ul>
                                    <li>Search a POI by name</li>
                                    <li>Find information about a POI</li>
                                    <li>Create your own bookmarks</li>
                                    <li>Measure distance</li>
                                    <li>Overlay hexagons (HexGrid) on the map</li>
                                    <li>Export portion of the map to jpeg</li>
                                    <li>More coming soon...</li>
                                </ul>
                            </p>
                            <p>The project is still in early alpha release, so we would really appreciate any feedback you can
                                send either issues or improvement suggestions. Please send your feedback to <a
                                    href="mailto:LoreAndMaps@gmail.com">LoreAndMaps@gmail.com</a>.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 portfolio-item">
                            <a>
                                <img className="img-responsive" src={gotImage}
                                     alt="Game of Thrones map"></img>
                            </a>
                            <h3>
                                <a>Game Of Thrones</a>
                            </h3>
                            <p>Explore the fantasy world of George R. R. Martin's fantasy series <i>Song of Ice and Fire</i>.
                            </p>
                        </div>

                        <div className="col-md-6 portfolio-item">
                            <a>
                                <img className="img-responsive" src={faerunImage} alt="Faerun Map"></img>
                            </a>
                            <h3>
                                <a>Faerun</a>
                            </h3>
                            <p>Explore the primary setting of the <i>Dungeons & Dragons</i> world of <i>Forgotten Realms</i>.
                            </p>
                        </div>
                    </div>

                </div>
                <hr/>
                <footer>
                    <p>&copy; 2016 - LoreMaps</p>
                </footer>
            </div>
        </div>

    );
  }
}

export default App;
