import React, { useEffect, useState } from 'react';
import snarkdown from 'snarkdown';

import './index.scss';

const Markdown = ({ url }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then(res => res.text())
      .then(text => {
        setData(text);
      });
  }, []);
  return (
    <div className="Markdown">
      {data && (
        <div dangerouslySetInnerHTML={{ __html: snarkdown(data) }}></div>
      )}
    </div>
  );
};

export default Markdown;
