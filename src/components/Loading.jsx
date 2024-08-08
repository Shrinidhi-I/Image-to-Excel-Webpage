// src/components/Loading.js
import React from 'react';

function Loading({ progress }) {
  return (
    <div className="loading">
      <p>Processing... {progress}%</p>
    </div>
  );
}

export default Loading;
