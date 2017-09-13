import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as rocketActions from '../actions/rocketActions';

import RocketList from '../components/RocketList';

class App extends React.Component {

  componentWillMount() {
    this.props.fetchRockets();
  }

  render(){
    const { rockets } = this.props;
    rockets.sort(function(a,b){
      let rocketA = a.name;
      let rocketB = b.name;
      let missFire = 0;
      if(rocketA > rocketB){
        missFire = 1;
      }
      else if (rocketA < rocketB){
        missFire = -1;
      }
      return missFire;
    });

    return (
      <div>
        <h1>HelloSign</h1>
        <RocketList rocketList={rockets}/>
      </div>
    );
  }
}


App.propTypes = {
  fetchRockets: PropTypes.func,
  rockets: PropTypes.array
};
// Maps state from store to props
const mapStateProps = (state) => {
  return {
    rockets: state.rockets
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRockets: () => dispatch(rocketActions.fetchRockets())
        // actions mappings here
  };
};



export default connect(mapStateProps, mapDispatchToProps)(App);
