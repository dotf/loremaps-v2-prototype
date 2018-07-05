import React, {Component} from 'react';
import loreMapsLogo from './images/LoreMaps_Logo.png';
import './App.css';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import './Home.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    card: {
        maxWidth: 600,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
});

class Home extends Component {
    render() {
        const {classes} = this.props;
        return (

            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <div className="centered">
                            <img width="450px" className="img-responsive" src={loreMapsLogo} alt="LoreMaps"/>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="centered">
                            <Typography component="div">
                                <p>LoreMaps is an attempt to help organize information on fantasy maps. With LoreMaps
                                    you easily
                                    complete the following activities on the fantasy world you are interested in
                                </p>
                                <ul>
                                    <li>Search a POI by name</li>
                                    <li>Find information about a POI</li>
                                    <li>Create your own bookmarks</li>
                                    <li>Measure distance</li>
                                    <li>Overlay hexagons (HexGrid) on the map</li>
                                    <li>Export portion of the map to jpeg</li>
                                    <li>More coming soon...</li>
                                </ul>
                                <p>The project is still in early alpha release, so we would really appreciate any
                                    feedback you can
                                    send either issues or improvement suggestions. Please send your feedback to <a
                                        href="mailto:LoreAndMaps@gmail.com">LoreAndMaps@gmail.com</a>.</p>
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={24}>
                            <Grid item xs={12} sm={6}>

                                <div className="align-right">
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.media}
                                        image="images/Maps/GoT_speculative_map700x400.jpg"
                                        title="Game of Thrones"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            Game Of Thrones
                                        </Typography>
                                        <Typography component="p">
                                            Explore the fantasy world of George R. R. Martin's fantasy series <i>Song of Ice and
                                            Fire</i>.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" component={Link} to="/map/1">
                                            View
                                        </Button>
                                    </CardActions>
                                </Card>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>

                                <div className="align-left">
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.media}
                                        image="images/Maps/faerunlarge700x400.jpg"
                                        title="Faerun"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            Faerun Map
                                        </Typography>
                                        <Typography component="p">
                                            xplore the primary setting of the <i>Dungeons & Dragons</i> world of <i>Forgotten
                                            Realms</i>.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" component={Link} to="/map/2">
                                            View
                                        </Button>
                                    </CardActions>
                                </Card>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Home);