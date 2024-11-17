import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-[#0B0B0A] text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-between items-center mb-6'>
          <div className='w-full md:w-1/3 mb-4 md:mb-0'>
            <h1 className='text-2xl font-bold'>Mountain Treks</h1>
            <p className='text-gray-400 mt-2'>
              Your gateway to unforgettable adventures. Explore the mountains,
              embrace nature, and create lasting memories.
            </p>
          </div>

          <div className='w-full md:w-1/3 mb-4 md:mb-0'>
            <h2 className='text-lg font-bold mb-3'>Quick Links</h2>
            <ul className='space-y-2'>
              <li>
                <Link to='/' className='hover:text-gray-300'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/login' className='hover:text-gray-300'>
                  Login
                </Link>
              </li>
              <li>
                <Link to='/registration' className='hover:text-gray-300'>
                  Registration
                </Link>
              </li>
            </ul>
          </div>

          <div className='w-full md:w-1/3'>
            <h2 className='text-lg font-bold mb-3'>Follow Us</h2>
            <div className='flex space-x-4'>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-blue-500 text-2xl'
              >
                <FaFacebook />
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-blue-400 text-2xl'
              >
                <FaTwitter />
              </a>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-pink-500 text-2xl'
              >
                <FaInstagram />
              </a>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-blue-700 text-2xl'
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-700 pt-4 text-center'>
          <p className='text-gray-400 text-sm'>
            &copy; {new Date().getFullYear()} Mountain Treks. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
