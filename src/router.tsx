import { createBrowserRouter } from 'react-router-dom';
import DemoDropdownPage from './pages/DemoDropdownPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DemoDropdownPage />, 
  },
  {
    path: '/dropdown',
    element: <DemoDropdownPage />,
  },
]);
