import React from 'react';
import { connect } from 'react-redux';
import * as rocketActions from '../actions/rocketActions';


import RocketList from '../components/RocketList';
import RocketSelector from '../components/RocketSelector';

class App extends React.Component {
  constructor(props){
    super(props);
  }


  componentWillMount(){
    this.props.fetchRockets();
  }

  render(){
    const { rockets } = this.props;
    return (
      <div>
        <h1>Hello World</h1>
        <RocketSelector rocketClass={rockets}/>
        <RocketList rocketList={rockets}/>
      </div>
    );
  }
}

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
