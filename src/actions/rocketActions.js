//fetch books from the application

import Axios from 'axios';
const rocketUrl =  'https://launchlibrary.net/1.2/rocket';

export const fetchRocketsSucces = (rockets) => {
  return {
    type: 'FETCH_ROCKET_SUCCESS',
    rockets
  };
};


export const fetchRockets = () => {
  return (dispatch) => {
    return Axios.get(rocketUrl)
      .then(response => {
        // console.log(response.data);
        dispatch(fetchRocketsSucces(response.data));
      })
      .catch(error => {
        console.log('i have errored');
        throw(error);
    });
  };
};
