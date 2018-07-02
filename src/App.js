import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Map from './Map';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar/>
                    <div className="container-fluid body-content">
                        <div>
                            <Route exact path="/" component={Home}/>
                            <Route path="/map" component={Map}/>
                        </div>

                        <hr/>
                        <Footer/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
