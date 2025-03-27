import { createBrowserRouter } from 'react-router-dom';
import DemoDropdownPage from './Demo/DemoInputArea';

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
