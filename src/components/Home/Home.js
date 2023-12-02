import React from 'react';
import person from './person.png';
import JobCategorys from '../JobCategorys/JobCategorys';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
const Home = () => {
  return (
    <>
      <div className="lg:h-[calc(80vh-80px)] p-5 flex-col lg:flex-row flex justify-between items-center px-5 md:px-12 bg-slate-100">
        <div className="lg:w-2/5">
          <h1 className="text-5xl my-5 font-bold ">
            One Step Closer To Your{' '}
            <span className="text-blue-400">Dream Job</span>
          </h1>
          <p className="tracking-wide text-slate-500">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn-primary mt-5">Get Started</button>
        </div>
        <div className="2/5">
          <img className="w-full lg:h-[500px] mx-auto" src={person} alt="" />
        </div>
      </div>
      <section>
        <JobCategorys></JobCategorys>
      </section>
      <section className="my-12">
        <FeaturedJob></FeaturedJob>
      </section>
    </>
  );
};

export default Home;
