import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ProductsPage } from './app/Components/pages/ProductsPage';
import App from './app/app';
import { ProductPage } from './app/Components/pages/ProductPage';
import { ErrorPage } from './app/Components/pages/ErrorPage';
import { HomePage } from './app/Components/pages/HomePage';
import { lazy, Suspense } from 'react';

const AdminPage = lazy(() => import('./app/Components/pages/AdminPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:id', element: <ProductPage /> },
      {
        path: 'admin',
        element: (
          <Suspense fallback={<div>Loading ...</div>}>
            <AdminPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
