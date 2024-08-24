import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiResponse, InitialState } from '../../utils/definitions';

const initialState: InitialState = {
  projectList: [],
  selectedProject: null,
  isLoading: true,
  error: '',
};

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async () => {
    try {
      const response = await fetch('http://localhost:3000/projects');
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }
);
export const fetchSingleProject = createAsyncThunk(
  'projects/fetchSingleProject',
  async (payload: number) => {
    try {
      const response = await fetch(`http://localhost:3000/projects/${payload}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }
);

const projectSlice = createSlice({
  name: 'projectSlice',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projectList = action.payload;
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
        state.projectList = action.payload.data;
        state.isLoading = false;
        state.error = '';
      }
    );
    builder.addCase(
      fetchProjects.rejected,
      (state, action: PayloadAction<unknown>) => {
        state.error = action.payload as string;
        state.isLoading = false;
        state.projectList = [];
      }
    );
  },
});

export const { setProjects, setSelectedProject } = projectSlice.actions;

export default projectSlice;
