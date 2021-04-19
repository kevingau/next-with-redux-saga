export const actionTypes = {
  FAILURE: 'FAILURE',
  HYDRATE: 'HYDRATE',
  SIGN_IN: 'SIGN_IN',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
};

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}

export function signIn(email, password) {
  return {
    type: actionTypes.SIGN_IN,
    email,
    password,
  };
}

export function signInSuccess(email) {
  return {
    type: actionTypes.SIGN_IN_SUCCESS,
    email,
  };
}
