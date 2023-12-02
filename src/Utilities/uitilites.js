const getLocalData = () => {
  let data = {};
  const localData = JSON.parse(localStorage.getItem('jobs'));
  if (localData) {
    data = localData;
  }
  return data;
};

const addToDb = id => {
  const getlocal = getLocalData();

  getlocal[id] = 1;
  localStorage.setItem('jobs', JSON.stringify(getlocal));
};

export { getLocalData, addToDb };
