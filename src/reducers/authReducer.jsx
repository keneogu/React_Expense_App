export default (state, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        loading: true,
        isAuthenticate: false,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthenticate: true,
        user: action.payload,
      };
    case "LOGIN_FAIL":
      return {
        loading: false,
        isAuthenticate: false,
        user: null,
      };
    case "LOGOUT_SUCCESS":
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
      };
    case "LOGOUT_FAIL":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
