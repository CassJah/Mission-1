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
      <h2>Upload Your Vehicle Image</h2>
      <p>Get instant vehicle type recognition</p>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {error && <p>Error: {error}</p>}
      {results && (
        <div>
          <h3>Recognition Results</h3>
          <p>Type: {results.type}</p>
          <p>Brand: {results.brand}</p>
          <p>Model: {results.model}</p>
        </div>
      )}
    </section>
  );
};

export default VehicleUpload;
