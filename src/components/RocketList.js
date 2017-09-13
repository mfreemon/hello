import React, {PropTypes} from 'react';

//decided to use simple stateless presentational component
// because no logic needed. Just passing data to prop rocketList
const RocketList = ({rocketList}) => {

  return (
    <div>
      <h3>Rockets Sorted Alphabetically</h3>
      <ul >
        {rocketList.map((rocket, i) =>
          <li className="rocket" key={i}>{rocket.name}</li>
        )}
      </ul>
    </div>
  );
};

RocketList.defaultProps = {
  rocketList: ['Rocket1', 'Rocket2']
};

RocketList.propTypes = {
  rocketList: PropTypes.array
};

export default RocketList;
