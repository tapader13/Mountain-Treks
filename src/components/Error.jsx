import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Link to='/'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Go back to Homepage
        </button>
      </Link>
    </div>
  );
};

export default Error;
