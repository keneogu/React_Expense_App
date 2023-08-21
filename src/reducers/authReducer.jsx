export default (state, action) => {
  switch(action.type) {
    case 'LOGIN_REQUEST':
      return {
        loading: true,
				isAuthenticate: false
      }
		case 'LOGIN_SUCCESS':
			return {
					...state,
					loading: false,
					isAuthenticate: true,
					user: action.payload
			}
	case 'LOGIN_FAIL':
		return {
				loading: false,
				isAuthenticate: false,
				user: null
		}
    default:
      return state;
  }
}
