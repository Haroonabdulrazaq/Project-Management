import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store.ts';
import { StrictMode } from 'react';
import Projects from './pages/Projects.tsx';
import Dashboard from './pages/Dashboard.tsx';
import NewProject from './pages/NewProject.tsx';
import ErrorPage from './error-page.tsx';
import App from './App.tsx';
import './index.scss';
import Project from './pages/Project.tsx';
import ComingSoon from './components/ComingSoon.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'projects/new',
        element: <NewProject />,
      },
      {
        path: 'projects/:projectId',
        element: <Project />,
      },
      {
        path: '/tasks/new',
        element: <ComingSoon />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
