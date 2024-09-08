import React, { useState } from 'react';
import '../UpComing/UpComing.css'; // Import custom CSS for styling
import IMG1 from '../../../Images/archi.png'; // Example image path
import IMG2 from '../../../Images/decor.png'; // Example image path
import Footer from '../../../Container/Footer/Footer';

const images = {
  'Heading 1': IMG2,
  'Heading 2': IMG2,
  'Heading 3': IMG2,
  // Add more images as needed
};

const UpComing = () => {
  const [currentImage, setCurrentImage] = useState(images['Heading 1']);

  const handleMouseEnter = (heading) => {
    setCurrentImage(images[heading]);
  };

  return (
    <div className="sr7-galig">
      <div className="row row_castum">
        <div className="col-md-6">
          <div className="image-container">
            <img src={currentImage} alt="Current" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6 text_upcoming d-flex">
          <div className="content-container">
            <div className='h-100'>
            <div className="content-item" 
                 onMouseEnter={() => handleMouseEnter('Heading 1')}>
              <h3>Whispers in Wood: An Exploration of Nature's Beauty</h3>
            </div>
            <div className='border-line'>
                <div className=' border'>

                </div>
            </div>
            <div className="content-item" 
                 onMouseEnter={() => handleMouseEnter('Heading 2')}>
              <h3>Tales in Timber: Mythology and Folklore in Woodcarving</h3>
            </div>
            <div className='border-line'>
                <div className=' border'>
                    
                </div>
            </div>
            <div className="content-item" 
                 onMouseEnter={() => handleMouseEnter('Heading 3')}>
              <h3>The Art of Carving:From Tradition to Modernity</h3>
            </div>
            </div>
          
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default UpComing;
