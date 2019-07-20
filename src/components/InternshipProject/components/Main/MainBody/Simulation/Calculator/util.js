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

// Divide your interest rate by the number of payments you’ll make in the year (interest rates are expressed annually). So, for example, if you’re making monthly payments, divide by 12.
// https://mozo.com.au/interest-rates/guides/calculate-interest-on-loan
export const calcInterest = ({
  rate,
  loanPrincipal,
  numberOfPayments = 12
}) => {
  const getFloatRate = parseFloat(
    convertToPercentage(rate, false) * 0.01
  ).toFixed(4);
  return (getFloatRate / numberOfPayments) * loanPrincipal;
};

// new balance
export const calcNewPrincipal = ({ loanPrincipal, repayment, interest }) => {
  return loanPrincipal - (repayment - interest);
};
