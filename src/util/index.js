export const intersectionObserver = (
  target,
  classNames,
  disconnect,
  index,
  callback,
  calcelCallBack
) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, i) => {
      const className = index < 4 ? classNames.fromTop : classNames.fromLeft;
      if (entry.isIntersecting) {
        if (callback) {
          callback();
          return;
        }
        if (!entry.target.classList.contains(className))
          entry.target.classList.add(className);
        if (disconnect) observer.disconnect();
      } else {
        if (calcelCallBack) {
          calcelCallBack();
          return;
        }
        if (entry.target.classList.contains(className))
          entry.target.classList.remove(className);
      }
    });
  });

  io.observe(target);
};
