
export const rocketfetchReducer = ( state =[ ], action) => {
  switch(action.type){
    case 'FETCH_ROCKET_SUCCESS':
      return action.rockets.rockets;
    default: return state;
  }
};
