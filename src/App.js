import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

// actions
import {
	removeFeatureAction,
	buyItemAction
} from './actions/carActions';

const App = (props) => {
  // const removeFeature = item => {
  //   // dispatch an action here to remove an item
  // };

  // const buyItem = item => {
	// 	// dispatch an action here to add an item
	// };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} buyItem={props.buyItemAction} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
		car: state.car,
		additionalPrice: state.additionalPrice,
		store: state.store
	});

const mapDispatchToProps = {
	removeFeatureAction,
	buyItemAction
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
