import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductSection.css'; // Make sure the path is correct
import img1 from '../../../Images/table.png';
import img2 from '../../../Images/yoda.png';
import img3 from '../../../Images/table.png';
import img4 from '../../../Images/yoda.png';
import img5 from '../../../Images/table.png';
import img6 from '../../../Images/yoda.png';


export default function ProductSection() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1, // Change slide one at a time
    dots: true, // Show navigation dots
    arrows: false, // Hide arrows
    centerMode: false, // Turn off center mode
    centerPadding: '0px', // No padding for center mode
    rows: 1, // Ensure a single row is shown
    focusOnSelect: true, // Enable focus on selected slide
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 5000, // Change slide every 5 seconds
  };

  const items = [
    { name: 'Item 1', category: 'Category 1', img:img1 },
    { name: 'Item 2', category: 'Category 2', img:img2 },
    { name: 'Item 3', category: 'Category 3', img:img3 },
    { name: 'Item 4', category: 'Category 4', img:img4 },
    { name: 'Item 5', category: 'Category 5', img:img5 },
    { name: 'Item 6', category: 'Category 6', img:img6 },
  ];

  return (
    <div className="product-section">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="card">
            <div className="card-image-container">
              <img src={item.img} alt={item.name} className="card-image" />
            </div>
            <div className="card-details">
              <h3 className="card-name">{item.name}</h3>
              <p className="card-category">{item.category}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
