import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <>
      <section className='text-center flex flex-col justify-center items-center h-96'>
        {/* <i className='fas fa-exclamation-triangle text-yellow-400 f mb-4'></i> */}
        <FaExclamationTriangle className='text-yellow text-6xl mb-4'></FaExclamationTriangle>
        <h1 className='text-6xl font-bold mb-4 color-yellow'>404 Not Found</h1>
        <p className='text-xl mb-5'>This page does not exist</p>
        <Link
          to='/'
          className='text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4'
        >
          Go Back
        </Link>
      </section>
    </>
  );
};

export default NotFoundPage;
