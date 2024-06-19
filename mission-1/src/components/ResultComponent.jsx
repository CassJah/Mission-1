import React from "react";
import "./ResultComponent.css";

const ResultComponent = ({ results }) => {
  if (!results) return null;

  return (
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
      <p>Is Black & White Image: {results.color.isBwImg ? "Yes" : "No"}</p>
      <p>Tags: {results.description.tags.join(", ")}</p>
      <p>
        Image Dimensions: {results.metadata.width}x{results.metadata.height}
      </p>
      <p>Format: {results.metadata.format}</p>
    </div>
  );
};

export default ResultComponent;
