import { ADD_USER } from '../actions';

const INITIAL_STATE = {

  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_USER:

    return {

      ...state,
      email: action.payload.email,
    };

  default:

    return state;
  }
};

export default userReducer;
