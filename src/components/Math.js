import React, { useEffect } from 'react';

const Math = ({ content }) => {
  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise().then(() => {
        console.log("Typeset completed!");
      }).catch((err) => console.error("Typeset failed: ", err));
    }
  }, [content]);  // Dependency on content to re-typeset if content updates

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Math;
