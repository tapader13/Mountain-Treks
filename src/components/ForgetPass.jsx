import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { DynamicTitle } from './DynamicTItle';

const ForgetPass = () => {
  const { forgetPass } = useAuth();
  const [email, setEmail] = useState('');
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);
  const handleSubmit = (e) => {
    e.preventDefault();
    forgetPass(email)
      .then(() => {
        window.open('https://mail.google.com/', '_blank');
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <DynamicTitle />{' '}
      <form onSubmit={handleSubmit} className='max-w-sm bg-white w-full p-6'>
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Enter your email'
            required
          />
        </div>

        <button
          type='submit'
          className='w-full p-3 bg-[#a3dcf1] text-[#ffffff] font-semibold rounded-lg shadow-md hover:bg-[#5cacee]  focus:outline-none focus:ring-2 focus:ring-[#004d73] focus:ring-offset-2'
        >
          Reset password
        </button>
        <Link
          to='/login'
          className='text-sm text-blue-500 hover:underline block text-center mt-4'
        >
          Login page?
        </Link>
      </form>
    </div>
  );
};

export default ForgetPass;
