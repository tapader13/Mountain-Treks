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

  return (
    <nav className='bg-gradient-to-r from-[#a8d8ea] to-[#ffffff] text-[#283046] shadow-md'>
      <div className='container mx-auto px-4 py-3 flex items-center justify-between'>
        {/* Website Name */}
        <Link
          to='/'
          className='text-2xl font-bold text-[#283046] hover:text-[#004d73]'
        >
          Mountain Treks
        </Link>

        {/* Navigation Links */}
        <div className='sm:flex hidden items-center space-x-6'>
          <Link to='/' className='hover:text-[#004d73]'>
            Home
          </Link>
          {user && (
            <>
              <Link to='/updateprofile' className='hover:text-[#004d73]'>
                Update Profile
              </Link>
              <Link to='/myprofile' className='hover:text-[#004d73]'>
                User Profile
              </Link>
            </>
          )}
        </div>

        {/* User Controls */}
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
                    className='w-10 h-10 rounded-full cursor-pointer border-2 border-[#a8d8ea] hover:border-[#004d73]'
                  />
                )}
              </div>

              <button
                onClick={handleLogout}
                className='block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700'
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to='/login'
              className='bg-[#a8d8ea] hover:bg-[#004d73] text-white px-4 py-2 rounded'
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className='sm:hidden'>
          <TiThMenuOutline
            onClick={() => setSidebar(!sidebar)}
            className='text-3xl cursor-pointer text-[#283046] hover:text-[#004d73]'
          />
        </div>

        {/* Mobile Sidebar */}
        {sidebar && (
          <div className='fixed top-0 right-0 h-full bg-gradient-to-b from-[#a8d8ea] to-[#ffffff] w-64 z-50 shadow-lg p-4'>
            <button
              className='text-[#283046] text-lg mb-6 hover:text-[#004d73]'
              onClick={() => setSidebar(false)}
            >
              Close
            </button>
            <ul className='flex flex-col space-y-4'>
              <li>
                <Link
                  to='/'
                  className='hover:text-[#004d73]'
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
                      className='hover:text-[#004d73]'
                      onClick={() => setSidebar(false)}
                    >
                      Update Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/myprofile'
                      className='hover:text-[#004d73]'
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
