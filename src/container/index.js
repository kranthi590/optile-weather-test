// Externals
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Material helpers
import {
  withStyles,
  Container as ThemeContainer,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  CircularProgress
} from '@material-ui/core';
import { WbSunny as WbSunnyIcon } from '@material-ui/icons';

// Internals
import { raiseAction, Actions } from '../actions';
import styles from './styles';
import Weather from './components/weather';

export class Container extends React.Component {

  componentDidMount() {
    const { actions } = this.props;
    actions.raiseAction(Actions.COMPONENT_INIT);
  }

  render() {

    const { isLoading, classes } = this.props;

    let renderComponent;
    if (isLoading) {
      renderComponent = <CircularProgress className={classes.loader}/>;
    } else {
      renderComponent = <Weather classes={classes}/>;
    }

    return (
      <React.Fragment>
        <CssBaseline/>
        <AppBar position="relative" color="primary">
          <Toolbar color="primary" variant="dense">
            <WbSunnyIcon className={classes.icon}/>
            <Typography variant="h6" color="inherit" noWrap>
              Weather Now
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.heroContent}>
            <ThemeContainer maxWidth="sm">
              {renderComponent}
            </ThemeContainer>
          </div>
        </main>
      </React.Fragment>
    );

  }
}

Container.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ raiseAction }, dispatch)
});

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(Container));
