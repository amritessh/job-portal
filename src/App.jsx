import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
// import Navbar from './components/navbar';
// import Hero from './components/Hero';
// import HomeCards from './components/HomeCards';
// import JobListings from './components/JobListings';
// import ViewAllJobs from './components/ViewAllJobs';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/about' element={<h1>My App</h1>} />)
);

const App = () => {
  return <RouterProvider router={router} />;
  // <>
  //   <Navbar />
  //   <Hero />
  //   <HomeCards />
  //   <JobListings />
  //   <ViewAllJobs />
  // </>
};

export default App;
