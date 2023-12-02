import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Outlet, useLoaderData } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';
import { getLocalData } from './Utilities/uitilites';
import Footer from './components/Footer/Footer';
export const JobsContext = createContext([]);
export const AddedJobContext = createContext([]);
function App() {
  const { jobs, addedData } = useLoaderData();

  const [addedJob, setAddedJob] = useState(addedData);

  return (
    <>
      <JobsContext.Provider value={jobs}>
        <AddedJobContext.Provider value={[addedJob, setAddedJob]}>
          <Navbar></Navbar>
          <div className="min-h-[calc(100vh-160px)]">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </AddedJobContext.Provider>
      </JobsContext.Provider>
    </>
  );
}

export default App;
