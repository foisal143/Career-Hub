import React from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-center  px-5 lg:px-12 gap-5 bg-black text-white py-5">
      <div>
        <h3 className="text-2xl font-semibold">CareerHub</h3>
        <p className="my-5 text-gray-500">
          There are many variations of passages of Lorem Ipsum , but the
          majority have suffered alteration in some form.
        </p>
        <div></div>
      </div>
      <div className="flex md:justify-center">
        <div>
          <h3 className="text-xl font-semibold">Company</h3>
          <ul className="text-gray-500 my-5">
            <li>About Us</li>
            <li> Latest News</li>
            <li>Work</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
      <div className="flex md:justify-center">
        <div>
          <h3 className="text-xl font-semibold">Product</h3>
          <ul className="text-gray-500 my-5">
            <li>Prototype</li>
            <li> Plans & Pricing</li>
            <li>Customers</li>
            <li>Integrations</li>
          </ul>
        </div>
      </div>
      <div className="flex md:justify-center">
        <div>
          <h3 className="text-xl font-semibold">Support</h3>
          <ul className="text-gray-500 my-5">
            <li>Help Desk</li>
            <li> Sales</li>
            <li>Become a Partne</li>
            <li>Developers</li>
          </ul>
        </div>
      </div>
      <div className="flex md:justify-center">
        <div>
          <h3 className="text-xl font-semibold">Contact</h3>
          <ul className="text-gray-500 my-5">
            <li>524 Broadway , NYC</li>
            <li> +1 777 - 978 - 5570</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
