import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <CartProvider>
      {/* <BrowserRouter> */}
        <RouterProvider router={router} />
      {/* </BrowserRouter> */}
    </CartProvider>
  );
}

export default App;
