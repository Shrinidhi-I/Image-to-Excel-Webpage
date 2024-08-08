import React, { useState } from 'react';

function ImageUpload({ onUpload, imagePreview }) {
  const [image, setImage] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files && files[0]) {
      setImage(files[0]);
      onUpload(files[0]);
    }
  };

  const handleFileSelect = (event) => {
    const files = event.target.files;
    if (files && files[0]) {
      setImage(files[0]);
      onUpload(files[0]);
    }
  };

  const handleDelete = () => {
    setImage(null);
    onUpload(null);
  };

  return (
    <div className="image-upload">
      <div 
        className="drop-zone"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <p>Drag and drop images here</p>
        <label htmlFor="file-upload" className="custom-file-upload">
          Browse Image File
        </label>
        <input id="file-upload" type="file" accept="image/*" onChange={handleFileSelect} />
      </div>
      
      {imagePreview && (
        <div className="image-preview">
          <img src={imagePreview} alt="Uploaded Preview" />
          <button className="delete-button" onClick={handleDelete}>✕</button>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
