import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import AdbentureExp from '../components/AdbentureExp';
import Service from '../components/Service';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AdbentureExp />
      <Service />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomePage;
