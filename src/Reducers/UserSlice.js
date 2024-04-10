import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setAuthToken } from "../actions/Authentification";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials, { dispatch }) => {
    const request = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
    });
    const reponseData = await request.json();

    const token = reponseData.body.token;
    console.log(token);

    // ajout du token dans le store
    dispatch(setAuthToken(token));

    if (token) {
      const responseProfile = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const userData = await responseProfile.json();
      console.log(userData.body);

      // return des données utilisateurs (nom, prenom, pseudo, etc..)
      return userData.body;
    }
  }
);

// modification de l'username
export const editUsername = createAsyncThunk(
  "user/profile",
  async (userCredentials, { getState }) => {
    try {
      // l'erreur vient d'ici, le token n'est pas recuperer
      const token = getState().auth.setAuthToken;
      console.log(token);

      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(userCredentials),
        }
      );
      const data = await response.json();

      console.log(data);
      console.log(response);
    } catch (error) {
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    data: null,
    error: null,
    isLoggedIn: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error = null;
        state.isLoggedIn = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        console.log(action.error.message);
        if (action.error.message === "Request failed with status code 401") {
          state.error = "Accès refusé ! Données invalides";
        } else {
          state.error = action.error.message;
        }
      });
  },
});
export default userSlice.reducer;
