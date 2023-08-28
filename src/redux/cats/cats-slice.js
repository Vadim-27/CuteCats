import { createSlice } from '@reduxjs/toolkit';
import { fetchCats } from './cats-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCats.pending, store => {
        store.loading = true;
      })
        .addCase(fetchCats.fulfilled, (store, { payload }) => {
          console.log('payload', payload);
        store.loading = false;
        store.items = [...payload];
      })
      .addCase(fetchCats.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
    //   .addCase(fetchAddContacts.pending, store => {
    //     store.loading = true;
    //   })
    //   .addCase(fetchAddContacts.fulfilled, (store, { payload }) => {
    //     store.loading = false;
    //     store.items.push(payload);
    //   })
    //   .addCase(fetchAddContacts.rejected, (store, { payload }) => {
    //     store.loading = false;
    //     store.error = payload;
    //   })
    //   .addCase(fetchDeleteContacts.pending, store => {
    //     store.loading = true;
    //   })
    //   .addCase(fetchDeleteContacts.fulfilled, (store, { payload }) => {
    //     store.loading = false;
    //     const index = store.items.findIndex(item => item.id === payload);
    //     store.items.splice(index, 1);
    //   })
    //   .addCase(fetchDeleteContacts.rejected, (store, { payload }) => {
    //     store.loading = false;
    //     store.error = payload;
    //   });
  },
});

export default catsSlice.reducer;
