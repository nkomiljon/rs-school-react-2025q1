import { NotFound } from '../components/404';
import { Details } from '../components/details';
import { Layout } from '../components/layout';
import { Main } from '../components/main/main';

export const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/details/:id',
        element: <Details />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
