import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './index.scss';
import store from './app/store.ts';
import { StrictMode } from 'react';
// import Dashboard from './pages/Dashboard.tsx';
import Projects from './pages/Projects.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Projects />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <App />
    </Provider>
  </StrictMode>
);
