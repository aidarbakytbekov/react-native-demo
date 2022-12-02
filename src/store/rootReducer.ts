import userSlice from './user/user.slice';
import {combineReducers} from '@reduxjs/toolkit';
export const allReducers = combineReducers({
  user: userSlice,
});
