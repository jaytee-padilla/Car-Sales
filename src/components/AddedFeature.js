import React from 'react';
import { connect } from 'react-redux';

// actions
import { removeFeatureAction } from '../actions/carActions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeatureAction(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {removeFeatureAction})(AddedFeature);
