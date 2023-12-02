import { getLocalData } from '../Utilities/uitilites';

const jobsLoader = async () => {
  const data = await fetch('jobs.json');
  const jobs = await data.json();
  return data;
};

export default jobsLoader;
