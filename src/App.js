import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import MapDetails from './MapDetails';
import './MapDetails.css';
import PropTypes from 'prop-types';
import withRoot from './withRoot';
import {withStyles} from '@material-ui/core/styles/index';

const styles = theme => ({
    root: {
        flexGrow: 1,
    }
});

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navigation/>
                    <div className="main-content">
                        <div>
                            <Route exact path="/" component={Home}/>
                            <Route path="/map/:id" component={MapDetails}/>
                        </div>

                    </div>
                </div>
            </Router>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
