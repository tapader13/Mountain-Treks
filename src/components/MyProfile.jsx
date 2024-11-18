import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { DynamicTitle } from './DynamicTItle';

const MyProfile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const handleUpdateProfile = () => {
    navigate('/update-profile');
  };

  return (
    <div className='min-h-screen bg-gray-100 p-6 flex justify-center items-center'>
      <DynamicTitle />
      <div className='max-w-4xl bg-white shadow-lg rounded-lg p-6'>
        <h1 className='text-3xl font-bold text-gray-800'>
          Welcome, {user ? user?.displayName : 'User'}!
        </h1>

        <div className='mt-4 flex items-center space-x-6'>
          <img
            src={user?.photoURL || 'https://via.placeholder.com/150'}
            alt='User Profile'
            className='w-24 h-24 rounded-full object-cover'
          />
          <div>
            <p>
              <strong>Name:</strong> {user?.displayName || 'Not Available'}
            </p>
            <p>
              <strong>Email:</strong> {user?.email || 'Not Available'}
            </p>
          </div>
        </div>

        <div className='mt-6'>
          <Link to={'/updateprofile'}>
            <button
              onClick={handleUpdateProfile}
              className='w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              Update Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
