import { createBrowserRouter } from 'react-router';
import './App.css';

import { routes } from './routes';
import { RouterProvider } from 'react-router';

const router = createBrowserRouter(routes);

export const App = () => <RouterProvider router={router} />;
