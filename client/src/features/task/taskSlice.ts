import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TaskInitialState } from '../../utils/definitions';

const { VITE_SERVER_URL } = import.meta.env;

const initialState: TaskInitialState = {
  taskList: [],
  selectedTask: null,
  isLoading: false,
  error: '',
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  try {
    const response = await fetch(`${VITE_SERVER_URL}/tasks`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
});

export const deleteTaskById = createAsyncThunk(
  'tasks/deleteTaskById',
  async ({ projectId, taskId }: { projectId: string; taskId: number }) => {
    try {
      const response = await fetch(
        `${VITE_SERVER_URL}/projects/${projectId}/tasks/${taskId}`,
        {
          method: 'DELETE',
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const taskSlice = createSlice({
  name: 'taskSlice',
  initialState,
  reducers: {
    setTasks(state, action) {
      state.taskList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.taskList = action.payload.data;
      state.isLoading = false;
      state.error = '';
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.error = action.payload as string;
      state.isLoading = false;
      state.taskList = [];
    });
    builder.addCase(deleteTaskById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTaskById.fulfilled, (state, action) => {
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload.data.id
      );
      state.isLoading = false;
    });
    builder.addCase(deleteTaskById.rejected, (state, action) => {
      state.error = action.payload as string;
      state.isLoading = false;
    });
  },
});
