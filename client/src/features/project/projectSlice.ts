import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiResponse } from '../../utils/types';

const initialState = {
  projects: [],
  selectedProject: null,
  isLoading: false,
};

const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
  try {
    const response = await fetch('http://localhost:3000/projects');
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});

const projectSlice = createSlice({
  name: 'projectSlice',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    setSelectedProject: (state, action) => {
      state.selectedProject = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchProjects.fulfilled,
      (state, action: PayloadAction<ApiResponse>) => {
        //  state.projects = action.payload.projects;
        state.isLoading = false;
      }
    );
  },
});

export const { setProjects, setSelectedProject } = projectSlice.actions;

export default projectSlice;
