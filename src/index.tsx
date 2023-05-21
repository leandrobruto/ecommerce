import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard } from './components/Dashboard';
import { ProductDetails } from './pages/ProductDetails';
import { CategoryDetails } from './pages/CategoryDetails';
import ErrorPage from './components/ErrorPage';
import { CartProducts } from './pages/CartProducts';
import { CartProvider } from './hooks/useCart';
import { ProductsProvider } from './hooks/useProducts';
import SuccessPage from './pages/SuccessPage';
import { CategoriesProvider } from './hooks/useCategories';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products/:productId",
    element: <ProductDetails />,
  },
  {
    path: "/category/:categorySlug",
    element: <CategoryDetails />,
  },
  {
    path: "/shoppingchart",
    element: <CartProducts />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/success",
    element: <SuccessPage />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CartProvider>
      <CategoriesProvider>
        <ProductsProvider>
          <RouterProvider router={router} />
        </ProductsProvider>
      </CategoriesProvider>
    </CartProvider>
  </React.StrictMode>
);
