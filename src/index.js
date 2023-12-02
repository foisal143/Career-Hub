import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import jobsLoader from './Loaders/Loaders';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <p>This is error page</p>,
    loader: () => fetch('jobs.json'),
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'job/:jobId',
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => params.jobId,
      },
      {
        path: 'statistic',
        element: <p>This is Statistic</p>,
      },
      {
        path: 'applied',
        element: <p>This is Applied jobs</p>,
      },
      {
        path: 'blog',
        element: <p>This is blog</p>,
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
