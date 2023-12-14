import api from "../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserInfo = createAsyncThunk("summoners", async (userNickName, { dispatch, rejectWithValue }) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    try {
        const response = await api.get(`/summoner/v4/summoners/by-name/${userNickName}?api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});