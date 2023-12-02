import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AddedJobContext, JobsContext } from '../../App';
import { useContext } from 'react';
import {
  CurrencyDollarIcon,
  HomeIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapIcon,
  MapPinIcon,
} from '@heroicons/react/24/solid';
import { addToDb } from '../../Utilities/uitilites';
const JobDetails = () => {
  const productId = useLoaderData();
  const jobs = useContext(JobsContext);
  const [addedJob, setAddedJob] = useContext(AddedJobContext);

  const job = jobs && jobs.find(job => job.id == productId);
  const {
    title,
    responsibilities,
    location,
    experience,
    education,
    description,
    company,
    email,
    phone,
    salary,
    id,
  } = job;
  const handleApplyJob = () => {
    const newJob = [...addedJob, job];
    setAddedJob(newJob);
    addToDb(id);
  };
  return (
    <div>
      <div className="h-52 bg-slate-100 flex justify-center items-center ">
        <h3 className="text-4xl font-bold">Job Details</h3>
      </div>
      <div className="w-10/12 my-12 mx-auto flex-col lg:flex-row flex justify-between items-center gap-10">
        <div className="lg:w-1/2">
          <p>
            <span className="text-xl font-semibold">Job description: </span>
            {description}
          </p>
          <p className="my-5">
            <span className="text-xl font-semibold">
              Job responsibilities:{' '}
            </span>
            {responsibilities &&
              responsibilities.map(res => <span>{res}</span>)}
          </p>
          <p>
            <span className="text-xl font-semibold">
              Educational Requirements:
            </span>{' '}
            <br />
            {education}
          </p>
          <p className="my-5">
            <span className="text-xl font-semibold">Experiences:</span> <br />
            {experience}
          </p>
        </div>
        <div className="lg:w-2/5 p-5 bg-slate-100">
          <h3 className="devide-x-2 font-bold text-xl">Job Details</h3>
          <hr className="border border-slate-300 my-4" />
          <p className="flex items-center">
            {' '}
            <CurrencyDollarIcon className="w-4 h-4 me-1 text-sky-300"></CurrencyDollarIcon>{' '}
            <span className="font-bold me-1">Salary: </span> {salary}
          </p>
          <p className="flex items-center">
            {' '}
            <HomeIcon className="w-4 h-4 me-1 text-sky-300"></HomeIcon>{' '}
            <span className="font-bold me-1">Job Title: </span> {title}
          </p>
          <div className="my-5">
            <h3 className="devide-x-2 font-bold text-xl">Contuct Details</h3>
            <hr className="border border-slate-300 my-4" />
            <p className="flex items-center">
              {' '}
              <PhoneIcon className="w-4 h-4 me-1 text-sky-300"></PhoneIcon>{' '}
              <span className="font-bold me-1">Phone: </span> {phone}
            </p>
            <p className="flex items-center">
              {' '}
              <EnvelopeIcon className="w-4 h-4 me-1 text-sky-300" />{' '}
              <span className="font-bold me-1">Email: </span> {email}
            </p>
            <p className="flex items-center">
              {' '}
              <MapPinIcon className="w-4 h-4 me-1 text-sky-300" />{' '}
              <span className="font-bold me-1">Address: </span> {location}
            </p>
            <button
              onClick={handleApplyJob}
              className="btn-primary w-full mt-5"
            >
              Apply Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
