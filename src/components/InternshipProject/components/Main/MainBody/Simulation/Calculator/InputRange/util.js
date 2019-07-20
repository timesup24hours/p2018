export const convertToPercentage = (value, addSign = true) => {
  let formatted = `${Number(~~value)}`;
  let tempArray = formatted.split('');
  if (tempArray.length === 1) {
    tempArray = [`${tempArray[0]}.00`];
  } else if (tempArray.length === 2) {
    tempArray = [`${tempArray[0]}.`, `${tempArray[1]}`, '0'];
  } else {
    tempArray = [`${tempArray[0]}.`, `${tempArray[1]}`, `${tempArray[2]}`];
  }
  if (addSign) return addPercentageSign(tempArray.join(''));
  return tempArray.join('');
};
export const takeNumberOnly = value => {
  if (typeof value === 'number') value = value.toString();
  return ~~value.replace(/[^0-9]/g, '');
};
export const addPercentageSign = value => {
  if (typeof value === 'number') value = value.toString();
  return value + '%';
};
