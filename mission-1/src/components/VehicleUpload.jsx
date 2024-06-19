import React, { useState } from "react";
import axios from "axios";
import "./VehicleUpload.css";

// VehicleUpload component allows users to upload an image for vehicle type recognition
const VehicleUpload = () => {
  // State to store the selected file, recognition results, image URL, and error message
  const [selectedFile, setSelectedFile] = useState(null);
  const [results, setResults] = useState(null);
  const [imageUrl, setImageUrl] = useState(null); // State to store image URL for preview
  const [error, setError] = useState(null);

  // Handle file input change event
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setImageUrl(URL.createObjectURL(event.target.files[0])); // Set the image URL for preview
  };

  // Handle form submission to upload the image and get recognition results
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      // Send a POST request to Azure Cognitive Services for image analysis
      const response = await axios.post(
        "https://jc-mission01.cognitiveservices.azure.com/vision/v3.2/analyze?visualFeatures=Categories,Description,Color",
        formData,
        {
          headers: {
            "Content-Type": "application/octet-stream",
            "Ocp-Apim-Subscription-Key": "aaef302e071c44c38673b4531245b7d8",
          },
        }
      );
      setResults(response.data); // Set the recognition results
      setError(null); // Clear any previous error
    } catch (error) {
      console.error("Error analyzing image:", error);
      setError(
        "Error: Request failed with status code " + error.response.status
      );
    }
  };

  return (
    <section className="vehicle-upload-section">
      <div className="vehicle-upload-content">
        {/* Side content section with vehicle tips, testimonials, and features */}
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
        {/* Upload form section */}
        <div className="upload-form">
          <h2>Upload Your Vehicle Image</h2>
          <p>Get instant vehicle type recognition</p>
          <form onSubmit={handleSubmit}>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button type="submit">Upload</button>
          </form>
          {/* Display error message if any */}
          {error && <p className="error">Error: {error}</p>}
          {/* Display uploaded image preview */}
          {imageUrl && (
            <div className="image-preview">
              <h3>Uploaded Image</h3>
              <img src={imageUrl} alt="Uploaded Vehicle" />
            </div>
          )}
          {/* Display recognition results */}
          {results && (
            <div className="results">
              <h3>Recognition Results</h3>
              {results.description?.captions.map((caption, index) => (
                <p key={index}>
                  Description: {caption.text} (Confidence:{" "}
                  {caption.confidence.toFixed(2)})
                </p>
              ))}
              <p>
                Categories:{" "}
                {results.categories.map((category) => category.name).join(", ")}
              </p>
              <p>Dominant Colors: {results.color.dominantColors.join(", ")}</p>
              <p>Accent Color: #{results.color.accentColor}</p>
              <p>
                Is Black & White Image: {results.color.isBwImg ? "Yes" : "No"}
              </p>
              <p>Tags: {results.description.tags.join(", ")}</p>
              <p>
                Image Dimensions: {results.metadata.width}x
                {results.metadata.height}
              </p>
              <p>Format: {results.metadata.format}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VehicleUpload;
