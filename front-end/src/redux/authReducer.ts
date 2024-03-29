// reducers/authReducer.ts

export {};

interface AuthState {
  loggedIn: boolean;
}

const initialState: AuthState = {
  loggedIn: false,
};

const authReducer = (state: AuthState = initialState, action: { type: string }) => {
  // Updating state accordingly
  switch (action.type) {
    case 'LOGIN':
      // Update state for login action
      return { ...state, loggedIn: true };
    case 'LOGOUT':
      // Update state for logout action
      return { ...state, loggedIn: false };
    // ... other cases
    default:
      return state;
  }
};

export default authReducer;