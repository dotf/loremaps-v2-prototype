import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Map from './Map';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container-fluid body-content">
                    <Router>
                        <div>
                            <Route exact path="/" component={Home}/>
                            <Route path="/map" component={Map}/>
                        </div>
                    </Router>

                    <hr/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
