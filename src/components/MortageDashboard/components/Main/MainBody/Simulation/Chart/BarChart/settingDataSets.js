import setColors from './setColors';

function isEven(n) {
  return n % 2 == 0;
}
export default (dataSets, color) => {
  const dataArray = [];
  if (color) {
    dataSets.forEach((d, i) => {
      dataArray.push({
        // stack: 'stack1',
        label: d.label,
        data: d.data,
        backgroundColor: setColors(d.data, i, color),
        borderWidth: 0
      });
    });
  } else {
    dataSets.forEach((d, i) => {
      dataArray.push({
        // stack: 'stack1',
        label: i,
        data: d,
        backgroundColor: setColors(d, i),
        borderWidth: 0
      });
    });
  }
  return dataArray;
};
