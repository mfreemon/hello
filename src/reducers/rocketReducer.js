
export const rocketfetchReducer = ( state =[], action) => {
  switch(action.type){
    case 'FETCH_ROCKET_SUCCESS':
      console.log(action.rockets);
      return action.rockets.rockets;
    default: return state;
  }
};
