export interface Project {
  id: number;
  name: string;
  description: string;
  status: string;
  startDate: string;
  endDate: string;
}

export interface ApiResponse {
  projects: Project[];
  message: string;
}
