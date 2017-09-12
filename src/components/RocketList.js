import React from 'react';


class RocketList extends React.Component {


  render(){
    const { rocketList } = this.props;
    return(
      <div>
        <h3>Rockets Sorted Alphabetically</h3>
        <ul >
          {rocketList.map((b, i) =>
            <li className="rocket" key={i}>{b.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

RocketList.defaultProps = {
  rocketList: ['Rocket1', 'Rocket2']

};

export default RocketList;
