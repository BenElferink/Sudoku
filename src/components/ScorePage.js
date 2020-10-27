import React from 'react';

function ScorePage({ pageStatus }) {
  return (
    <section
      id='score'
      style={{
        width: pageStatus ? '100%' : '0%',
        opacity: pageStatus ? 1 : 0,
        visibility: pageStatus ? 'visible' : 'hidden',
      }}></section>
  );
}

export default ScorePage;
