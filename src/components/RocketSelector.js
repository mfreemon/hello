import React from 'react';


class RocketSelector extends React.Component {


  render(){
    const { rocketClass } = this.props;
    return(
      <div>
        <h3>List of Rockets</h3>
        <div className="row">
          <div>
            <select>
              {rocketClass.map((b, i) =>
                <option key={i}>{b.name}</option>
              )}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

RocketSelector.defaultProps = {
  rocketList: ['Rocket1', 'Rocket2']

};

export default RocketSelector;
