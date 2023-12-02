import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Outlet, useLoaderData } from 'react-router-dom';
import { createContext } from 'react';
export const JobsContext = createContext([]);
function App() {
  const jobs = useLoaderData();

  return (
    <>
      <JobsContext.Provider value={jobs}>
        <Navbar></Navbar>
        <div>
          <Outlet></Outlet>
        </div>
      </JobsContext.Provider>
    </>
  );
}

export default App;
