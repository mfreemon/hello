import React from 'react';


class RocketList extends React.Component {


  render(){
    const { rocketList } = this.props;
    return(
      <div>
        <h3>List of Rockets</h3>
        <div className="row">
          <div>
            <ul >
              {rocketList.map((b, i) =>
                <li className="thumbnail" key={i}>{b.name}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

RocketList.defaultProps = {
  rocketList: ['Rocket1', 'Rocket2']

};

export default RocketList;
