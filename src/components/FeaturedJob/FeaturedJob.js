import React from 'react';
import { JobsContext } from '../../App';
import { useContext, useState } from 'react';
import Job from '../Job/Job';
const FeaturedJob = () => {
  const jobsData = useContext(JobsContext);
  const [limit, setLimit] = useState(6);
  const jobs = jobsData.slice(0, limit);
  console.log(jobs);
  return (
    <div>
      <h3 className="text-4xl font-bold text-center">Featured Jobs</h3>
      <p className="text-center text-gray-500">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid px-5 md:px-12 grid-cols-1 md:grid-cols-3 gap-10 my-12">
        {jobs.map(job => (
          <Job job={job} key={job.id}></Job>
        ))}
      </div>
      {limit ? (
        <div className="text-center">
          <button onClick={() => setLimit(undefined)} className="btn-primary  ">
            Show All
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default FeaturedJob;
