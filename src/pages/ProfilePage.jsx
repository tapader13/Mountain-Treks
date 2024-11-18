import { DynamicTitle } from '../components/DynamicTItle';
import MyProfile from '../components/MyProfile';
import Navbar from '../components/Navbar';

const ProfilePage = () => {
  return (
    <div>
      <DynamicTitle />
      <Navbar />
      <MyProfile />
    </div>
  );
};

export default ProfilePage;
