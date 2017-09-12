import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as rocketActions from '../actions/rocketActions';


import RocketList from '../components/RocketList';
import RocketSelector from '../components/RocketSelector';



class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      rockets: this.props.rockets
    };

    this.selectedRocket = this.selectedRocket.bind(this);
    this.meTalk = this.meTalk.bind(this);

    // const { rockets } = this.props;
  }


  componentWillMount(){
    this.props.fetchRockets();
    this.setState({rockets: Object.keys(this.props.rockets)});
  }

  selectedRocket(e){

    let allRockets = this.props.rockets.name.split('');
    // let myRocket = e.target.value.split('-');
    let similar = allRockets.reduce(function(allRockets, myRocket){
      return allRockets[myRocket];
    });

    console.log(similar);

    // console.log(allRockets);
    // console.log(myRocket);
  }

  meTalk(){
    console.log(this.state.rockets);
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



    // console.log(rockets);
    return (
      <div>
        <h1>HelloSign</h1>
        <RocketSelector
          selectRocket={this.selectedRocket}
          rocketClass={rockets}/>
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
