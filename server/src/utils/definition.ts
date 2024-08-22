export interface IProject {
  id: number;
  name: string;
  description?: string;
  due_date: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ITask {
  id: number;
  name: string;
  description?: string;
  status: string;
  project_id: number;
  createdAt?: Date;
  updatedAt?: Date;
}
