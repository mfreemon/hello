import React from 'react';
// import { connect } from 'react-redux';
import RocketList from './RocketList';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>Hello World</h1>
        <RocketList/>
      </div>
    );
  }
}




export default App;
