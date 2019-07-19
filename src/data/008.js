import React from 'react';

const code = `
Prepend: O(1)
Append: O(1)
Insert: O(1)
Find: O(n)
Copy: O(n)
`;

const code1 = `
Prepend: O(1)
Append: O(n)
Insert: O(n)
Find: O(n)
Copy: O(1)
`;

export default {
  id: '407f7cec-0420-4123-aeee-a7c3e646fc5e',
  title: 'Bad of immutable.js',
  subTitle: '',
  article: [
    { title: 'Bad of immutable.js' },
    {
      content:
        'A mutable single-linked list has the following time complexities (worst-case, assuming front, back and insertion nodes are known):'
    },
    { code: code },
    { html: ({ index }) => <br key={index} /> },
    { html: ({ index }) => <br key={index} /> },
    {
      content:
        'In contrast, an immutable single-linked list has the following time complexities (worst-case, assuming front, back and insertion nodes are known):'
    },
    { code: code1 },
    { html: ({ index }) => <br key={index} /> },
    { html: ({ index }) => <br key={index} /> }
  ],
  createdAt: '2017-11-14T21:32:20.175Z'
};
