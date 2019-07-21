export default (data, i, color) => {
  const backgroundColors = [];
  data.forEach((value, index) => {
    if (color) {
      if (i === 0) {
        backgroundColors[index] = 'rgb(93, 134, 255)';
      } else if (i === 1) {
        backgroundColors[index] = 'rgb(255, 0, 0)';
      }
    } else {
      if (value > 10) {
        backgroundColors[index] = 'rgb(93, 134, 255)';
      } else {
        backgroundColors[index] = 'rgb(255, 0, 0)';
      }
    }
    // if (i === 0) {
    //   backgroundColors[index] = 'rgb(93, 134, 255)';
    // } else if (i === 1) {
    //   backgroundColors[index] = 'rgb(255, 0, 0)';
    // } else if (i === 2) {
    //   backgroundColors[index] = 'purple';
    // }
  });
  return backgroundColors;
};
