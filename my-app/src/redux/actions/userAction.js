import api from "../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserInfo = createAsyncThunk("summoners", async (userNickName, { rejectWithValue }) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    try {
        const userInfoApi = await api.get(`/summoner/v4/summoners/by-name/${userNickName}?api_key=${API_KEY}`);
        const leagueInfoApi = await api.get(`/league/v4/entries/by-summoner/${userInfoApi.data.id}?api_key=${API_KEY}`);
        return {
            userInfo: userInfoApi.data,
            leagueInfo: leagueInfoApi.data,
        };
    } catch (error) {
        return rejectWithValue(error.message);
    }
});