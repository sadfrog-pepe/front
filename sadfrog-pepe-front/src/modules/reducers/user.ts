import { createSlice } from '@reduxjs/toolkit';

interface UserState {
    email: string;
    password: string;
    name: string;
}

const initialState: UserState[] = [];

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registerUser: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { registerUser } = userSlice.actions;

export default userSlice.reducer;
