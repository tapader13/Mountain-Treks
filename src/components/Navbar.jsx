import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Simulated user authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState({
    name: 'John Doe',
    profilePhoto: 'https://via.placeholder.com/40', // Replace with actual photo URL
  });

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUser({
      name: 'John Doe',
      profilePhoto: 'https://via.placeholder.com/40',
    });
  };

  return (
    <nav className='bg-[#282520] text-white shadow-md'>
      <div className='container mx-auto px-4 py-3 flex items-center justify-between'>
        {/* Website Name */}
        <Link to='/' className='text-2xl font-bold'>
          Mountain Treks
        </Link>

        {/* Navigation Links */}
        <div className='flex items-center space-x-6'>
          <Link to='/' className='hover:text-gray-300'>
            Home
          </Link>
          {isLoggedIn && (
            <>
              <Link to='/update-profile' className='hover:text-gray-300'>
                Update Profile
              </Link>
              <Link to='/update-profile' className='hover:text-gray-300'>
                User Profile
              </Link>
            </>
          )}
        </div>

        <div className='flex items-center space-x-4'>
          {isLoggedIn ? (
            <div className='flex gap-5 items-center'>
              <img
                title='User Profile'
                src={user.profilePhoto}
                alt='User Profile'
                className='w-10 h-10 rounded-full cursor-pointer'
              />

              <div className=''>
                <button
                  onClick={handleLogout}
                  className='block w-full px-4 py-2 text-left bg-red-600 text-gray-100'
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className='bg-[#94794A] hover:bg-[#262626] text-white px-4 py-2 rounded'
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
