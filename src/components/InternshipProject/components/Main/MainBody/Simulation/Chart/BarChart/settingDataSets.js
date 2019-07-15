import setColors from './setColors';

export default dataSets => {
  const dataArray = [];
  dataSets.forEach(d => {
    dataArray.push({
      data: d,
      backgroundColor: setColors(d),
      borderWidth: 0
    });
  });
  return dataArray;
};
