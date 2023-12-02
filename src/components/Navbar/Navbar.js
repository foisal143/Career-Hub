import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <nav className="h-20 bg-slate-100 flex justify-between px-5 md:px-12 items-center">
      <div>
        <Link to="/">
          <h3 className="font-bold text-2xl">CAREER HUB</h3>
        </Link>
      </div>
      <span
        className="lg:hidden cursor-pointer"
        onClick={() => setIsopen(!isOpen)}
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6"></XMarkIcon>
        ) : (
          <Bars3Icon className="w-6 h-6"></Bars3Icon>
        )}
      </span>
      <div
        className={`flex lg:static justify-center items-center absolute -top-96 w-full lg:w-fit   lg:flex-row flex-col gap-10 ${
          isOpen ? 'top-20 p-5' : '-top-96'
        } duration-500 bg-slate-100 z-10 `}
      >
        <NavLink
          to="/"
          className={({ isActive }) => isActive && 'text-blue-300'}
        >
          Home
        </NavLink>
        <NavLink
          to="/statistic"
          className={({ isActive }) => isActive && 'text-blue-300'}
        >
          Statistics
        </NavLink>
        <NavLink
          to="/applied"
          className={({ isActive }) => isActive && 'text-blue-300'}
        >
          Applied Jobs
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => isActive && 'text-blue-300'}
        >
          Blog
        </NavLink>
        <div className="lg:hidden">
          <Link to="/applied">
            <button className="btn-primary">Start Appling</button>
          </Link>
        </div>
      </div>
      <div className="hidden lg:block">
        <Link to="/applied">
          <button className="btn-primary">Start Appling</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
