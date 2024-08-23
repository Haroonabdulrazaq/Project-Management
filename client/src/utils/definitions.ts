export interface Task {
  id: number;
  name: string;
  description?: string;
  status: 'In progress' | 'Complete' | 'Pending';
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface Project {
  id: number;
  name: string;
  description?: string;
  due_date: string;
  createdAt: string;
  updatedAt: string;
  Tasks: Task[];
}

export interface ApiResponse {
  data: Project[];
  message: string;
}

export interface InitialState {
  projectList: Project[];
  selectedProject: Project | null;
  isLoading: boolean;
  error: string;
}
