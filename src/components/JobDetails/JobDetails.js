import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { JobsContext } from '../../App';
import { useContext } from 'react';
const JobDetails = () => {
  const id = useLoaderData();
  const jobs = useContext(JobsContext);
  const job = jobs.find(job => job.id == id);
  const {
    title,
    responsibilities,
    location,
    experience,
    education,
    description,
    company,
  } = job;
  return <div>This is details section</div>;
};

export default JobDetails;
