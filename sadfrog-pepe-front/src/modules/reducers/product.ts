import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axios';
import request from '../../api/request';

export interface ProducutState {
  id: number;
  defaultPrice: number;
  image: string;
  name: string;
}

const initialState: ProducutState[] = [];

export const getProducts = createAsyncThunk('product/getProducts', async () => {
  try {
    const response = await axiosInstance
      .get(request.products)
      .then((res) => res.data);

    console.log(response.data);

    return response.data;
  } catch {
    throw new Error();
  }
});

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default productSlice.reducer;
