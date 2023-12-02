import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJob = ({ job }) => {
  const { id, type, title, salary, location, img, company } = job;
  return (
    <div className="flex justify-between my-5 items-center gap-10">
      <img className="w-36 h-36" src={img} alt="" />
      <div className="flex-grow flex justify-between">
        <div className="flex-grow">
          <h3>{title}</h3>
          <p>{company}</p>
          <div className="flex my-2 items-center gap-8">
            <p className="px-6 rounded-md py-1 font-bold text-sky-500 border border-sky-500">
              {type}
            </p>
            <p className="px-6 rounded-md py-1 font-bold text-sky-500 border border-sky-500">
              Full Time
            </p>
          </div>
          <div className="flex my-3 justify-start gap-10 items-center">
            <p className="flex text-gray-500">
              <MapPinIcon className="w-5 h-5" /> {location}
            </p>
            <p className="flex text-gray-500">
              {' '}
              <CurrencyDollarIcon className="w-5 h-5"></CurrencyDollarIcon>{' '}
              {salary}{' '}
            </p>
          </div>
        </div>
        <Link to={`/${id}`}>
          <button className="btn-primary">Vew Details</button>
        </Link>
      </div>
    </div>
  );
};

export default AppliedJob;
