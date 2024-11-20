import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from './../hooks/useAuth';
import { DynamicTitle } from './DynamicTItle';

const Login = () => {
  const { loginUser, googleLogin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const loc = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const frm = loc?.state?.from?.pathname || '/';
    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }
    setError('');
    loginUser(email, password)
      .then((user) => {
        const usr = user.user;
        // console.log(usr);
        navigate(frm, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  const handleGoogleLogin = async () => {
    try {
      const frm = loc?.state?.from?.pathname || '/';
      googleLogin()
        .then((user) => {
          // console.log(user.user);

          navigate(frm, { replace: true });
        })
        .catch((err) => {
          setError(err.message);
        });
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <DynamicTitle />
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-2xl text-[#004d73] font-bold text-center mb-6'>
          Login
        </h2>
        {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}
        <form onSubmit={handleSubmit}>
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
          <div className='mb-6'>
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
              className='mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your password'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full px-4 py-2 bg-[#a3dcf1] text-[#ffffff] font-semibold rounded-md hover:bg-[#5cacee] focus:outline-none focus:ring-2 focus:ring-[#004d73] focus:ring-offset-2'
          >
            Login
          </button>
          <Link
            state={{ email }}
            to='/forgotpassword'
            className='text-sm text-blue-500 hover:underline block text-center mt-4'
          >
            Forgot Password?
          </Link>
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
            Don&apos;t have an account?{' '}
            <Link to='/registration' className='text-blue-500 hover:underline'>
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
