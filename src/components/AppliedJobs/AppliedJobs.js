import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AddedJobContext } from '../../App';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
  const [addedJob, setAddedJob] = useContext(AddedJobContext);
  console.log(addedJob);

  const handleFilter = e => {
    const filterValue = e.target.value;
    console.log(filterValue === 'Full Time');

    if (filterValue === 'Remote') {
      const remoteJob = addedJob.filter(job => job.type === 'Remote');
      setAddedJob(remoteJob);
    }
    if (filterValue === 'Full Time') {
      const fullTime = addedJob.filter(job => job.type === 'Full-time');

      setAddedJob(fullTime);
    }
    if (filterValue === 'Sort By') {
      setAddedJob(addedJob);
    }
  };
  return (
    <div>
      <div className="h-52 bg-slate-100 flex justify-center items-center ">
        <h3 className="text-4xl font-bold">Applied Jobs</h3>
      </div>
      <div>
        <div className="text-end my-12">
          <select
            onChange={e => handleFilter(e)}
            className="border outline-sky-400 rounded-md cursor-pointer border-sky-400 p-1"
            name="job"
            id="job"
          >
            <option value="Sort By">Sort By</option>
            <option value="Remote">Remote</option>
            <option value="Full Time">Full Time</option>
          </select>
        </div>
        {addedJob.length === 0 && (
          <p className="text-center text-4xl">Not Found</p>
        )}
        <div className="w-3/4 mx-auto">
          {addedJob.map(job => (
            <AppliedJob job={job} key={job.id}></AppliedJob>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
