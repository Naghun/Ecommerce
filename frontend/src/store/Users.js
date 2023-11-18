import { createSlice } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";


const intitval={
    user: '',
    authtokens: ''
}


const userSlice = createSlice({

    name: 'user',
    initialState: intitval,
    reducers:  {
        getUser: (state, action) => {
            state.user = action.payload.user
        },

        getAuthToken: (state, action) => {
            state.authtokens = action.payload.authtokens
        },

        logout: (state) => {
            state.user = intitval.user
            state.authtokens = intitval.authtokens
        }
    }

})

export default userSlice.reducer

export const { getUser, logout, getAuthToken } = userSlice.actions;