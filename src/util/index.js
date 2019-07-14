export const intersectionObserver = (target, className, disconnect) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        if (!entry.target.classList.contains(className))
          entry.target.classList.add(className);
        if (disconnect) observer.disconnect();
      } else {
        if (entry.target.classList.contains(className))
          entry.target.classList.remove(className);
      }
    });
  });

  io.observe(target);
};
