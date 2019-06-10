import * as actionTypes from '../constants';

const initialState = {};

const reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACTION:
      return {
        ...state,
        otherState: action.payload,
      };
    default:
      return state;
  }
};

export default reducer1;
