import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
const Job = ({ job }) => {
  const { id, type, title, salary, location, img, company } = job;
  console.log(id);
  return (
    <div>
      <img className="h-72 mb-5" src={img} alt="" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-500">{company}</p>
      <div className="flex my-2 items-center gap-8">
        <p className="px-6 rounded-md py-1 font-bold text-sky-500 border border-sky-500">
          Remote
        </p>
        <p className="px-6 rounded-md py-1 font-bold text-sky-500 border border-sky-500">
          Full Time
        </p>
      </div>
      <div className="flex my-3 justify-between items-center">
        <p className="flex text-gray-500">
          <MapPinIcon className="w-5 h-5" /> {location}
        </p>
        <p className="flex text-gray-500">
          {' '}
          <CurrencyDollarIcon className="w-5 h-5"></CurrencyDollarIcon> {salary}{' '}
        </p>
      </div>
      <Link to={`/job/${id}`}>
        <button className="btn-primary">Vew Details</button>
      </Link>
    </div>
  );
};

export default Job;
