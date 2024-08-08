// src/components/Steps.js
import React from 'react';

function Steps() {
  return (
    <div className="steps">
      <div className="step">
        <h2>1</h2>
        <p>Browse / drag and drop your image.</p>
      </div>
      <div className="step">
        <h2>2</h2>
        <p>Wait for the conversion process to complete.</p>
      </div>
      <div className="step">
        <h2>3</h2>
        <p>Download your converted Excel sheet.</p>
      </div>
    </div>
  );
}

export default Steps;
