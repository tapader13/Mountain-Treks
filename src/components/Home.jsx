import AdbentureExp from './AdbentureExp';
import Banner from './Banner';
import Service from './Service';
import Team from './Team';
import { DynamicTitle } from './DynamicTItle';

const Home = () => {
  return (
    <div>
      <DynamicTitle />
      <Banner />
      <AdbentureExp />
      <Service />
      <Team />
    </div>
  );
};

export default Home;
