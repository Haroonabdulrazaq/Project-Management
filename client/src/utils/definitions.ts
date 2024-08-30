import { ReactNode } from 'react';

export interface ITask {
  id: number;
  name: string;
  description?: string;
  status: 'In progress' | 'Complete' | 'Pending';
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface IProject {
  id: number;
  name: string;
  description?: string;
  due_date: string;
  createdAt: string;
  updatedAt: string;
  Tasks: ITask[];
}

export interface ApiResponse {
  data: IProject[];
  message: string;
}

export interface InitialState {
  projectList: IProject[];
  selectedProject: IProject | null;
  isLoading: boolean;
  error: string;
}

export interface TaskInitialState {
  taskList: ITask[];
  selectedTask: ITask | null;
  isLoading: boolean;
  error: string;
}

export interface CustomLayoutProps {
  children: ReactNode;
}

export interface RouteError {
  statusText?: string;
  message?: string;
}
