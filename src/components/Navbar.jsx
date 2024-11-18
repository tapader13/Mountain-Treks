import { Link } from 'react-router-dom';
import useAuth from './../hooks/useAuth';
import { TiThMenuOutline } from 'react-icons/ti';
import { useState } from 'react';

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const [sidebar, setSidebar] = useState(false);
  const handleLogout = () => {
    logoutUser();
  };
  // console.log(user?.displayName, 5);
  // console.log(user?.photoURL, 6);
  // console.log(user, 8);

  return (
    <nav className='bg-[#282520] text-white shadow-md'>
      <div className='container mx-auto px-4 py-3 flex items-center justify-between'>
        {/* Website Name */}
        <Link to='/' className='text-2xl font-bold'>
          {/* Mountain Treks */}
          {user?.email}
        </Link>

        {/* Navigation Links */}
        <div className='sm:flex hidden  items-center space-x-6'>
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
              <div
                className='tooltip tooltip-left tooltip-primary'
                data-tip={user?.displayName}
              >
                {user && (
                  <img
                    src={user?.photoURL || user?.providerData[0]?.photoURL}
                    alt='User Profile'
                    className='w-10 h-10  rounded-full cursor-pointer'
                  />
                )}
              </div>

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
        <div className='sm:hidden'>
          <TiThMenuOutline
            onClick={() => setSidebar(!sidebar)}
            className='text-3xl cursor-pointer '
          />
        </div>
        {sidebar && (
          <div className='fixed top-0 right-0 h-full bg-[#282520] w-64 z-50 shadow-lg p-4'>
            <button
              className='text-gray-300 text-lg mb-6'
              onClick={() => setSidebar(false)}
            >
              Close
            </button>
            <ul className='flex flex-col space-y-4'>
              <li>
                <Link
                  to='/'
                  className='hover:text-gray-300'
                  onClick={() => setSidebar(false)}
                >
                  Home
                </Link>
              </li>
              {user && (
                <>
                  <li>
                    <Link
                      to='/updateprofile'
                      className='hover:text-gray-300'
                      onClick={() => setSidebar(false)}
                    >
                      Update Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/myprofile'
                      className='hover:text-gray-300'
                      onClick={() => setSidebar(false)}
                    >
                      User Profile
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
