export const intersectionObserver = (target, className) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        if (!entry.target.classList.contains(className))
          entry.target.classList.add(className);
      } else {
        if (entry.target.classList.contains(className))
          entry.target.classList.remove(className);
      }
    });
  });

  io.observe(target);
};
