import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/services/CatsApi/CatsApi';

export const fetchCats = createAsyncThunk(
    'cats/fetch-all',
    async ({limit}, thunkAPI) => {
  try {
    const result = await api.getCats(limit);
      
    return result;
  } catch ({ response }) {
    return thunkAPI.rejectWithValue(response.data);
  }
});
