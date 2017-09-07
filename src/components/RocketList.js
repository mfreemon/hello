import React from 'react';
import { connect } from 'react-redux';
import * as rocketActions from '../actions/rocketActions';


class RocketList extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchRockets();
  }


  render() {
    return(
      <div>
        <h3>List of Rockets</h3>
        <ul>
          {this.props.rockets.map((b, i) =>
            <li key={i}>{b.name}</li>
          )}
        </ul>
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

export default connect(mapStateProps, mapDispatchToProps)(RocketList);
