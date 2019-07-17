import React from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default ({ data }) => {
  return (
    <SyntaxHighlighter
      customStyle={{ width: '100%' }}
      language="javascript"
      style={atomDark}
      // atomDark
      // prism
      // twilight
      // tomorrow
      // solarizedlight
      // okaidia
      // funky
      // dark
      // coy
      showLineNumbers={false}
      wrapLines={true}
    >
      {data}
    </SyntaxHighlighter>
  );
};
