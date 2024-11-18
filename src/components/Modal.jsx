const Modal = ({ title, message, onClose }) => {
  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
        <h2 className='text-2xl font-bold mb-4'>{title}</h2>
        <p className='text-gray-600'>{message}</p>
        <button
          onClick={onClose}
          className='mt-6 w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500'
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
