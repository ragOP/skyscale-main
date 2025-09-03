import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="bg-white">
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
