export default data => {
  const backgroundColors = [];
  data.forEach((value, index) => {
    if (value > 10) {
      backgroundColors[index] = 'rgb(93, 134, 255)';
    } else {
      backgroundColors[index] = 'rgb(255, 0, 0)';
    }
  });
  return backgroundColors;
};
