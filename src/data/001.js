const initialCodeString = `export const intersectionObserver = (target, className) => {
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
`;

export default {
  id: '8bc545f5-c240-4bfd-9927-4be53ec0ab70',
  title: 'Intersection Observer API',
  subTitle: '',
  content: 'Observering target element if intersecting into the screen',
  code: initialCodeString,
  article: [
    { title: 'Intersection Observer API' },
    { subTitle: '' },
    { content: 'Observering target element intersecting into the screen' },
    { code: initialCodeString }
  ],
  createdAt: '2017-09-20T19:25:09.623Z'
};
