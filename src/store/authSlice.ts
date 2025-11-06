import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User, AuthState } from "../types";

const getInitialState = (): AuthState => {
  const savedAuth = localStorage.getItem("auth");
  
  if (savedAuth) {
    try {
      const authData = JSON.parse(savedAuth);

      if (authData.user && authData.isAuthenticated) {
        return {
          user: authData.user,
          isAuthenticated: true,
          isLoading: false,
        };
      }
    } catch (error) {
      console.error("Error parsing auth data:", error);
      localStorage.removeItem("auth"); 
    }
  }
  
  return {
    user: null,
    isAuthenticated: false,
    isLoading: false,
  };
};

const initialState: AuthState = getInitialState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuthenticated = true;

      localStorage.setItem("auth", JSON.stringify({
        user: action.payload,
        isAuthenticated: true,
        timestamp: new Date().getTime()
      }));
    },
    loginFailure: (state) => {
      state.isLoading = false;
      state.user = null;
      state.isAuthenticated = false;
      
      localStorage.removeItem("auth");
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;

      localStorage.removeItem("auth");
    },

    restoreAuth: (state) => {
      const savedAuth = localStorage.getItem("auth");
      if (savedAuth) {
        try {
          const authData = JSON.parse(savedAuth);
          if (authData.user && authData.isAuthenticated) {
            state.user = authData.user;
            state.isAuthenticated = true;
          }
        } catch (error) {
          console.error("Error restoring auth:", error);
        }
      }
    }
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, restoreAuth } = authSlice.actions;
export default authSlice.reducer;