// src/App.js
import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import Steps from './components/Steps';
import Loading from './components/Loading';
import Result from './components/Result';
import './styles.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [excelData, setExcelData] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleUpload = (image) => {
    if (!image) {
      setImagePreview(null);
      setExcelData(null);
      return;
    }

    setImagePreview(URL.createObjectURL(image));
    setLoading(true);
    setProgress(0);

    // Simulate backend processing
    let timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Simulate setting the excel data
          setExcelData([
            { Column1: 'Data1', Column2: 'Data2' },
            { Column1: 'Data3', Column2: 'Data4' },
          ]);
          setLoading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div className="app">
      <header>
        <h1>Image to Excel Converter</h1>
        <p>Upload your images to convert them into Excel data.</p>
      </header>
      <ImageUpload onUpload={handleUpload} imagePreview={imagePreview} />
      {loading && <Loading progress={progress} />}
      {excelData && <Result data={excelData} />}
      <Steps />
    </div>
  );
}

export default App;
