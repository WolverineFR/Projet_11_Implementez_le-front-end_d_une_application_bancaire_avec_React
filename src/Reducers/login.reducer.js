const initialState = {
  isLoggedIn: false,
};

const isConnected = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGGED_IN":
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default isConnected;
