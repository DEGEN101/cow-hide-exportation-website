import React from "react";
import "./Gallery.css";

import imageI1 from "../../Assets/Images/UI/Icons/OG_Icons/i1.jpg";
import imageI2 from "../../Assets/Images/UI/Icons/OG_Icons/i2.jpg";
import imageI6 from "../../Assets/Images/UI/Icons/OG_Icons/i6.jpg";
import imageI4 from "../../Assets/Images/UI/Icons/OG_Icons/i4.jpg";
import imageI7 from "../../Assets/Images/UI/Icons/OG_Icons/i7.jpg";
import imageI3 from "../../Assets/Images/UI/Icons/OG_Icons/i3.jpg";
import imageI8 from "../../Assets/Images/UI/Icons/OG_Icons/i8.jpg";
import imageI5 from "../../Assets/Images/UI/Icons/OG_Icons/i5.jpg";

const Gallery = () => {
  const images = [
    imageI1,
    imageI2,
    imageI6,
    imageI4,
    imageI7,
    imageI3,
    imageI8,
    imageI5,
    imageI2,
    imageI6,
    imageI4,
    imageI7,
    imageI2,
    imageI6,
    imageI4,
    imageI7,
    imageI3,
    imageI8,
    imageI5,
    imageI4,
    imageI7,
    imageI2,
    imageI6,
    imageI4,
    imageI7,
    imageI3,
    // Add more image paths here
  ];
  turn (
    <div className="gallery-container">
      <h1 className="gallery-title">#CowHideExportation,Ltd</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            className={`gallery-item template-${(index % 6) + 1}`}
            key={index}
          >
            <img src={image} alt={`Gallery item ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default Gallery;