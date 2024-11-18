import { Link } from 'react-router-dom';
import useAuth from './../hooks/useAuth';

const Navbar = () => {
  const { user, logoutUser } = useAuth();

  const handleLogout = () => {
    logoutUser();
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
          {user && (
            <>
              <Link to='/updateprofile' className='hover:text-gray-300'>
                Update Profile
              </Link>
              <Link to='/myprofile' className='hover:text-gray-300'>
                User Profile
              </Link>
            </>
          )}
        </div>

        <div className='flex items-center space-x-4'>
          {user ? (
            <div className='flex gap-5 items-center'>
              <img
                title={user?.displayName}
                src={user?.photoURL}
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
            <Link
              to={'/login'}
              className='bg-[#94794A] hover:bg-[#262626] text-white px-4 py-2 rounded'
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
