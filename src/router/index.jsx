import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Layout from '../components/common/Layout';
import Products from '../pages/Products';
import Home2 from '../pages/Home2';
import LoveReport from '../pages/LoveReport';
import PremiumAstroConsultation from '../pages/PremiumAstroConsultation';
import SoulmateSketch from '../pages/SoulmateSketch';
import WealthReport from '../pages/WealthReport';
import Records from '../pages/Records';
import OrderConfirmation from '../pages/OrderConfirmation';

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
      {
        path: 'premium-astro-consultation',
        element: <PremiumAstroConsultation />
      },
      {
        path: 'soulmate-sketch',
        element: <SoulmateSketch />
      },
      {
        path: 'wealth-report',
        element: <WealthReport />
      },
      {
        path: 'record',
        element: <Records />
      },
      {
        path: 'order-confirmation',
        element: <OrderConfirmation />
      },
    ]
  }
]);
