import { Outlet } from 'react-router-dom';
import CartDrawer from './CartDrawer';

const Layout = () => {
  return (
    <div className="h-[100vh] w-[100vw] overflow-scroll">
      <div>
        <Outlet />
      </div>
      <CartDrawer />
    </div>
  );
};

export default Layout;
