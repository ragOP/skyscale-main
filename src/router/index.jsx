import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Layout from '../components/common/Layout';
import Products from '../pages/Products';
import Home2 from '../pages/Home2';
import LoveReport from '../pages/LoveReport';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'love-report',
        element: <LoveReport />
      },
    ]
  }
]);
