import { getLocalData } from '../Utilities/uitilites';

const jobsLoader = async () => {
  const jobsData = await fetch('jobs.json');
  const jobs = await jobsData.json();
  const localData = getLocalData();
  const addedData = [];
  for (const id in localData) {
    if (localData) {
      const add = jobs.find(job => job.id == id);
      addedData.push(add);
    }
  }

  return { jobs, addedData };
};

export default jobsLoader;
