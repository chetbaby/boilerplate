import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => ({});

const Homepage = props => (
  <div id="homepage">
    <h1>Home Page</h1>
  </div>
);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
