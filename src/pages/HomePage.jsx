import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomePage;
