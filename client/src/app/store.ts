import { configureStore } from '@reduxjs/toolkit';
import projectSlice from '../features/project/projectSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    projects: projectSlice.reducer,
  },
});
type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
