import { type RouteObject } from 'react-router-dom';
import EmptyLayout from './layouts/EmptyLayout';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Todos, { loader as todosLoader } from './pages/Todos';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <EmptyLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/todos',
        element: <Todos />,
        loader: todosLoader,
      },
    ],
  },
  {
    path: '/*',
    element: <NotFound />,
  },
];

export default routes;
