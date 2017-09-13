//fetch books from the api
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
        dispatch(fetchRocketsSucces(response.data));
      })
      .catch(error => {
        throw(error);
    });
  };
};
