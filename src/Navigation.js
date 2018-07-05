import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <AppBar position="fixed" style={{backgroundColor: 'white', color: 'rgba(0, 0, 0, 0.87)'}}>
                <Toolbar>
                    <Typography component={Link} to="/" variant="title" color="inherit" style={{marginRight: 20}}>
                        LoreMaps
                    </Typography>
                    <Button color="inherit" component={Link} to="/map/2">Game of Thrones</Button>
                    <Button color="inherit" component={Link} to="/map/1">Faerun</Button>
                    <Button color="inherit" component={Link} to="/map/3">WFI</Button>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Navigation;