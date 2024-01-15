// reducers/authReducer.ts

export {};

interface AuthState {
  loggedIn: boolean;
  // Add other properties as needed
}

const initialState: AuthState = {
  loggedIn: false,
  // Initialize other properties if needed
};

const authReducer = (state: AuthState = initialState, action: { type: string }) => {
  // Handle different actions and update the state accordingly
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