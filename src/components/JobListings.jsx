// import React from 'react'
import jobs from '../jobs.json';

const JobListings = () => {
  return (
    <>
      <section className='py-4'>
        <div className='container-xl lg:container m-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
            <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
              <h2 className='text-2xl font-bold'>For Developers</h2>
              <p className='mt-2 mb-4'>
                Browse our React jobs and start your career today
              </p>
              <a
                href='/jobs.html'
                className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
              >
                Browse Jobs
              </a>
            </div>
            <div className='bg-indigo-100 p-6 rounded-lg shadow-md'>
              <h2 className='text-2xl font-bold'>For Employers</h2>
              <p className='mt-2 mb-4'>
                List your job to find the perfect developer for the role
              </p>
              <a
                href='/add-job.html'
                className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600'
              >
                Add Job
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Browse Jobs --> */}
      <section className='bg-blue-50 px-4 py-10'>
        <div className='container-xl lg:container m-auto'>
          <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
            Browse Jobs
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {jobs.map}
          </div>
        </div>
      </section>
    </>
  );
};

export default JobListings;
