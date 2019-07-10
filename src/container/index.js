// Externals
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Internals
import { raiseAction, Actions } from '../actions';

export class Container extends React.Component {

  componentDidMount() {
    const { actions } = this.props;
    actions.raiseAction(Actions.COMPONENT_INIT);
  }

  render() {
    return (
      <div></div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
