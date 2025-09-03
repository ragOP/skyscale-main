import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
