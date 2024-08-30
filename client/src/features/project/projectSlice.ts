import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiResponse, InitialState } from '../../utils/definitions';
import { IProject } from '../../utils/definitions';

const initialState: InitialState = {
  projectList: [],
  selectedProject: null,
  isLoading: true,
  error: '',
};

const { VITE_SERVER_URL } = import.meta.env;

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async () => {
    try {
      const response = await fetch(`${VITE_SERVER_URL}/projects`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

export const fetchProjectById = createAsyncThunk(
  'projects/fetchProjectById',
  async (payload: number) => {
    try {
      const response = await fetch(`${VITE_SERVER_URL}/projects/${payload}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const createProject = createAsyncThunk(
  'projects/createProject',
  async (payload: IProject) => {
    try {
      const response = await fetch(`${VITE_SERVER_URL}/projects`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      });
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
    builder.addCase(fetchProjectById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProjectById.fulfilled, (state, action) => {
      state.selectedProject = action.payload.data;
      state.isLoading = false;
      state.error = '';
    });
    builder.addCase(fetchProjectById.rejected, (state, action) => {
      state.error = action.payload as string;
      state.isLoading = false;
      state.selectedProject = null;
    });
  },
});

export const { setProjects, setSelectedProject } = projectSlice.actions;

export default projectSlice;
