import React, { useState } from "react";
import axios from "axios";
import "./VehicleUpload.css";

const VehicleUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      // Step 1: Upload image to Azure Blob Storage (or similar service)
      const blobResponse = await axios.post("/upload", formData);
      const imageUrl = blobResponse.data.url;

      // Step 2: Send image URL to Azure Cognitive Services for analysis
      const analysisResponse = await axios.post("/analyze", { url: imageUrl });
      setResults(analysisResponse.data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="vehicle-upload-section">
      <div className="vehicle-upload-content">
        <div className="side-content">
          <div className="info-banner">
            <h4>Vehicle Tips</h4>
            <p>Regular maintenance can extend the life of your vehicle.</p>
          </div>
          <div className="testimonial">
            <h4>Customer Testimonial</h4>
            <p>"Turners helped me find the perfect car insurance with ease!"</p>
          </div>
          <div className="info-banner">
            <h4>Why Choose Us?</h4>
            <p>
              We offer comprehensive insurance plans tailored to your needs.
            </p>
          </div>
          <div className="feature">
            <h4>Key Features</h4>
            <ul>
              <li>Quick and easy process</li>
              <li>Accurate vehicle recognition</li>
              <li>Instant results</li>
              
            </ul>
          </div>
        </div>
        <div className="upload-form">
          <h2>Upload Your Vehicle Image</h2>
          <p>Get instant vehicle type recognition</p>
          <form onSubmit={handleSubmit}>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button type="submit">Upload</button>
          </form>
          {error && <p className="error">Error: {error}</p>}
          {results && (
            <div className="results">
              <h3>Recognition Results</h3>
              <p>Type: {results.type}</p>
              <p>Brand: {results.brand}</p>
              <p>Model: {results.model}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VehicleUpload;
