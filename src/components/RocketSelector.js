import React, { PropTypes } from 'react';


class RocketSelector extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: ""
    };

  }

  render(){
    const { rocketClass, selectRocket } = this.props;

    const rocketTypes  =  rocketClass.map((rocketType, i) => {
      if(rocketClass) {
        return (
          <option value={rocketType.name} key={i}>
            {rocketType.name}
          </option>
        );
      }
    });

    return(
      <div>
        <h3>Classes of Rockets</h3>
        <div className="row">
          <div>
            <select onChange={selectRocket}>
              {rocketTypes}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

RocketSelector.propTypes = {
  selectRocket: PropTypes.func,
  rocketClass: PropTypes.array
};

// RocketSelector.defaultProps = {
//   rocketList: ['Rocket1', 'Rocket2']
//
// };

export default RocketSelector;
