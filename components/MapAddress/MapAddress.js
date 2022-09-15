import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/LocalPhone';
import LocationIcon from '@material-ui/icons/LocationOn';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react18';
import { useTranslation } from 'next-i18next';
import useStyles from './map-address-style';
import TitleDeco from '../Title/WithDecoration';

function MapContainer(props) {
  const { google } = props;
  return (
    <Map
      google={google}
      style={{ width: '100%', height: '700px', position: 'relative' }}
      initialCenter={{
        lat: 6.740744,
        lng: 3.056712
      }}
      zoom={14}
    >
      <Marker
        position={{ lat: 6.740744, lng: 3.056712 }}
      />
    </Map>
  );
}

MapContainer.propTypes = {
  google: PropTypes.object.isRequired
};

const MapWithAMarker = GoogleApiWrapper({ apiKey: null })(MapContainer);

function MapAdress() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  // Translation Function
  const { t } = useTranslation('common');
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={6}>
          {isDesktop && (
            <Grid item md={1} />
          )}
          <Grid item md={5} xs={12}>
            <TitleDeco text={t('agency-landing.office_title')} />
            <div className={classes.block}>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInLeftShort"
                offset={-100}
                delay={200}
                duration={0.3}
              >
                <Paper className={classes.paper}>
                  <Typography variant="h6" display="block">
                    {t('agency-landing.office_head')}
                  </Typography>
                  <Grid container>
                    <Grid item sm={6} xs={12}>
                      <PhoneIcon className={classes.icon} />
                      +234 81 37311818
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <EmailIcon className={classes.icon} />
                      softroleum.ltd@gmail.com
                    </Grid>
                    <Grid item xs={12}>
                      <LocationIcon className={classes.icon} />
                      4 Seriki Abass Crescent, Ajao Estate, Osolo Way, Lagos, Nigeria
                    </Grid>
                  </Grid>
                </Paper>
              </ScrollAnimation>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInLeftShort"
                offset={-100}
                delay={500}
                duration={0.3}
              >
                <Paper className={classes.paper}>
                  <Typography variant="h6" display="block">
                    {t('agency-landing.office_branch')}
                  </Typography>
                  <Grid container>
                    <Grid item sm={6} xs={12}>
                      <PhoneIcon className={classes.icon} />
                      +234 81 37311818
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <EmailIcon className={classes.icon} />
                      softroleum.ltd@gmail.com
                    </Grid>
                    <Grid item xs={12}>
                      <LocationIcon className={classes.icon} />
                      Grandview Pack and Garden, Adron Estate, Sokoto Road, Atan, Ota, Ogun State
                    </Grid>
                  </Grid>
                </Paper>
              </ScrollAnimation>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <Paper className={classes.map} elevation={10}>
              <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '700px' }} />}
                mapElement={<div style={{ height: '100%' }} />}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MapAdress;
