import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer-bg py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-between items-center mb-6'>
          <div className='w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0'>
            <h1 className='text-2xl font-bold text-white'>Mountain Treks</h1>
            <p className='text-gray-400 mt-2'>
              Your gateway to unforgettable adventures. Explore the mountains,
              embrace nature, and create lasting memories.
            </p>
          </div>

          <div className='w-full flex flex-col items-center md:items-start md:w-1/3 mb-4 md:mb-0'>
            <h2 className='text-lg font-bold text-white mb-3'>Quick Links</h2>
            <ul className='space-y-2 text-center md:text-start'>
              <li>
                <Link to='/' className='footer-link'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/login' className='footer-link'>
                  Login
                </Link>
              </li>
              <li>
                <Link to='/registration' className='footer-link'>
                  Registration
                </Link>
              </li>
            </ul>
          </div>

          <div className='w-full flex flex-col items-center md:items-start md:w-1/3'>
            <h2 className='text-lg font-bold text-white mb-3'>Follow Us</h2>
            <div className='flex space-x-4'>
              <a
                href='https://www.facebook.com/muhammad.minhaj.799316'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Facebook'
                className='text-gray-400 hover:text-blue-500 text-2xl transform hover:scale-110 transition duration-200'
              >
                <FaFacebook />
              </a>
              <a
                href='https://x.com/MinhajTapader'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Twitter'
                className='text-gray-400 hover:text-blue-400 text-2xl transform hover:scale-110 transition duration-200'
              >
                <FaTwitter />
              </a>
              <a
                href='https://www.instagram.com/uddintapader/?next=%2F&hl=en'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'
                className='text-gray-400 hover:text-pink-500 text-2xl transform hover:scale-110 transition duration-200'
              >
                <FaInstagram />
              </a>
              <a
                href='https://www.linkedin.com/in/minhaj-uddin-5b1a20338/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
                className='text-gray-400 hover:text-blue-700 text-2xl transform hover:scale-110 transition duration-200'
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
