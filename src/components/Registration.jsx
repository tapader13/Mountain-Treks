import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { DynamicTitle } from './DynamicTItle';

const Registration = () => {
  const { signUpUser, googleLogin, updateProfileUser, setUser } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      googleLogin()
        .then((user) => {
          // console.log(user.user);
          navigate('/');
        })
        .catch((err) => {
          setError(err.message);
        });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!passwordRegex.test(password)) {
      setError(
        'Password must be at least 6 characters long, and include at least one uppercase and one lowercase letter.'
      );
      return;
    }

    signUpUser(email, password)
      .then((user) => {
        if (user && !user.displayName) {
          updateProfileUser({
            displayName: name,
            photoURL: photoURL,
          })
            .then(() => {
              setUser((prev) => ({
                ...prev,
                displayName: name,
                photoURL: photoURL,
              }));
              navigate('/');
            })
            .catch((err) => {
              setError(err.message);
            });
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <DynamicTitle />
      <div className='w-full max-w-md p-6 bg-white shadow-lg rounded-md'>
        <h2 className='text-2xl font-bold text-center mb-6'>Register</h2>

        {error && <p className='text-red-500 text-center mb-4'>{error}</p>}

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
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
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label
              htmlFor='photoURL'
              className='block text-sm font-medium text-gray-700'
            >
              Photo URL
            </label>
            <input
              type='text'
              id='photoURL'
              required
              onChange={(e) => setPhotoURL(e.target.value)}
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <button
              type='submit'
              className='w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              Register
            </button>
          </div>
        </form>

        <div className='mt-6'>
          <button
            onClick={handleGoogleLogin}
            className='w-full px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500'
          >
            Sign in with Google
          </button>
        </div>

        <div className='mt-4 text-center'>
          <p className='text-sm'>
            Already have an account?{' '}
            <Link to='/login' className='text-blue-500 hover:text-blue-700'>
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
