import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import jobsLoader from './Loaders/Loaders';
import JobDetails from './components/JobDetails/JobDetails';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Statistic from './components/Statistic/Statistic';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    loader: jobsLoader,
    errorElement: <p>This is error page</p>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: jobsLoader,
      },
      {
        path: '/:jobId',
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => params.jobId,
      },
      {
        path: 'statistic',
        element: <Statistic></Statistic>,
      },
      {
        path: 'applied',
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: 'blog',
        element: <Blog></Blog>,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
