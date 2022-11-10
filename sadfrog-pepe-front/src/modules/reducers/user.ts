import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { stat } from 'fs';
import axiosInstance from '../../api/axios';
import request from '../../api/request';

interface UserState {
    email: string;
    password: string;
    name: string;
}

const initialState: UserState[] = [];

export const signupUser = createAsyncThunk(
    'user/signupUser',
    async (userData: UserState) => {
        try {
            const response = await axiosInstance.post(
                request.register,
                JSON.stringify(userData)
            );

            console.log(response);

            if (response.status === 201) {
                localStorage.setItem('accessToken', response.accessToken); // 쿠키 저장 안됨.
                localStorage.setItem('refreshToken', response.refreshToken); // 쿠키 저장 안됨.
                return { ...response.data, ...userData };
            } else {
                throw new Error();
            }
        } catch (e: any) {
            console.log('Error', e.response.data);
            throw new Error();
        }
    }
);

export const auth = createAsyncThunk('user/auth', async () => {
    const responce = await axiosInstance
        .get(request.auth)
        .then((res) => res.data);

    return responce;
});

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registerUser: (state, action) => {
            console.log(action.payload);
            console.log(action.type);
            state.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signupUser.fulfilled, (state, action) => {
            state.push(action.payload);
        });

        builder.addCase(auth.fulfilled, (state, action) => {
            state.push(action.payload);
        });
    },
});

export const { registerUser } = userSlice.actions;

export default userSlice.reducer;
