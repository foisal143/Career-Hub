import React from 'react';
import {
  CalculatorIcon,
  LightBulbIcon,
  CodeBracketIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/24/solid';
const JobCategorys = () => {
  return (
    <div className="my-20">
      <h3 className="text-3xl mb-2 text-center  font-bold">
        Job Category List
      </h3>
      <p className="mb-12 text-center text-slate-500">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="p-10 rounded-md bg-slate-100">
          <CalculatorIcon className="w-8   h-8 text-blue-300 "></CalculatorIcon>
          <h4 className="text-xl font-bold">Account & Finance</h4>
          <p className="text-gray-500">300 jobs available</p>
        </div>
        <div className="p-10 rounded-md bg-slate-100">
          <LightBulbIcon className="w-8   h-8 text-blue-300 " />
          <h4 className="text-xl font-bold">Creative Design</h4>
          <p className="text-gray-500">100+ jobs available</p>
        </div>
        <div className="p-10 rounded-md bg-slate-100">
          <Square3Stack3DIcon className="w-8   h-8 text-blue-300 " />
          <h4 className="text-xl font-bold">Marketing & Sales</h4>
          <p className="text-gray-500">150 jobs available</p>
        </div>
        <div className="p-10 rounded-md bg-slate-100">
          <CodeBracketIcon className="w-8   h-8 text-blue-300 " />
          <h4 className="text-xl font-bold">Engineering Job</h4>
          <p className="text-gray-500">224 jobs available</p>
        </div>
      </div>
    </div>
  );
};

export default JobCategorys;
