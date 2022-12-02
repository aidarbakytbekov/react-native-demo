import {createSlice} from '@reduxjs/toolkit';

interface IInitialState {
  isLoading: boolean;
  userToken: string | null;
}

const initialState: IInitialState = {
  isLoading: true,
  userToken: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: state => {
      state.isLoading = false;
      state.userToken = 'sdadas';
    },
    signOut: state => {
      state.isLoading = false;
      state.userToken = null;
    },
  },
});

export const {signIn, signOut} = userSlice.actions;

export default userSlice.reducer;
