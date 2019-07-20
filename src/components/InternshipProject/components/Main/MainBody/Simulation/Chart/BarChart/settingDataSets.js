import setColors from './setColors';

function isEven(n) {
  return n % 2 == 0;
}
export default dataSets => {
  const dataArray = [];
  dataSets.forEach((d, i) => {
    dataArray.push({
      // stack: 'stack1',
      data: d,
      backgroundColor: setColors(d),
      borderWidth: 0
    });
  });
  return dataArray;
};
