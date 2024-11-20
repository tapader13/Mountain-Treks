import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, updateProfile } from 'firebase/auth';
import { DynamicTitle } from './DynamicTItle';
import useAuth from '../hooks/useAuth';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { user: usr, setUser } = useAuth();

  const handleUpdateProfile = async () => {
    setError('');
    if (!name || !photoURL) {
      setError('Name and Profile Photo URL are required.');
      return;
    }

    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      try {
        await updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            setUser((prev) => ({
              ...prev,
              displayName: name,
              photoURL: photoURL,
            }));
            navigate('/myprofile');
          })
          .catch((error) => {
            // console.error('Error updating profile: ', error);
            setError('Failed to update profile. Please try again later.');
          });
      } catch (error) {
        // console.error('Error updating profile: ', error);
        setError('Failed to update profile. Please try again later.');
      }
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 p-4'>
      <DynamicTitle />
      <div className='w-full max-w-lg bg-white p-6 rounded-lg shadow-md'>
        <h2 className='text-3xl font-semibold text-center text-[#004d73] mb-6'>
          Update Profile
        </h2>
        {error && <p className='text-red-500 text-center mb-4'>{error}</p>}
        <form>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-lg font-medium text-gray-600'
            >
              Name:
            </label>
            <input
              id='name'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='Enter your name'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='photoURL'
              className='block text-lg font-medium text-gray-600'
            >
              Profile Photo URL:
            </label>
            <input
              id='photoURL'
              type='text'
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='Enter your photo URL'
            />
          </div>
          <button
            type='button'
            onClick={handleUpdateProfile}
            className='w-full p-3 bg-[#a3dcf1] text-[#ffffff] font-semibold rounded-lg shadow-md hover:bg-[#5cacee]  focus:outline-none focus:ring-2 focus:ring-[#004d73] focus:ring-offset-2'
          >
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
