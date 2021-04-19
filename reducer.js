import { actionTypes } from './actions';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  error: false,
  email: '',
};

function reducer(state, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }

    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      };

    case actionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        ...{ email: action.email },
      };

    default:
      return state;
  }
}

export default reducer;
