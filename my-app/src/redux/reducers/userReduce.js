import { createSlice } from '@reduxjs/toolkit';
import { getUserInfo } from '../actions/userAction';

let initialState = {
    userInfo: {},
    leagueInfo: {},
    status: "",
    error: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getInfo: (state, action) => {
            state.userInfo = action.payload.userInfo;
                state.leagueInfo = action.payload.leagueInfo;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserInfo.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.userInfo = action.payload.userInfo;
                state.leagueInfo = action.payload.leagueInfo;
            })
            .addCase(getUserInfo.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;