export const SET_IS_AUTHORIZED = "SET_IS_AUTHORIZED";

export const LoginActions = {
  setIsAuthorizedAction: (isAuthorized) => ({
    type: SET_IS_AUTHORIZED,
    payload: isAuthorized,
  }),
};
