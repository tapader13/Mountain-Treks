import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import AdbentureExp from '../components/AdbentureExp';
import Service from '../components/Service';
import Team from '../components/Team';
import { DynamicTitle } from '../components/DynamicTItle';

const HomePage = () => {
  return (
    <div>
      <DynamicTitle />
      <Navbar />
      <Banner />
      <AdbentureExp />
      <Service />
      <Team />

      <Footer />
    </div>
  );
};

export default HomePage;
