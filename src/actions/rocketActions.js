//fetch books from the application

import Axios from 'axios';

const rocketUrl =  'https://launchlibrary.net/1.2/rocket';

export const fetchRocketsSucces = (rocket) => {
  return {
    type: 'ROCKET_SUCCESS',
    rocket
  };
};


export const fetchRockets = () => {
  return (dispatch) => {
    return Axios.get(rocketUrl)
      .then(response => {
        dispatch(fetchRocketsSucces, response.data);
      })
      .catch(error => {
        throw(error);
    });
  };
};
