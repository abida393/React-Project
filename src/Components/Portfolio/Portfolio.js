import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'
function Portfolio() {
  const [images, setimages] = useState([]);
   useEffect(() => {
     axios
       .get("data/Data.json")
       .then((response) => setimages(response.data.portfolio))
       .catch((error) => console.error("Error fetching data:", error));
      }, []);
      console.log(images)
      return (
    <div className="portfolio">
      <h2 className="portfolio-title">
        <span>My</span> Portfolio
      </h2>
      <ul className="portfolio-list">
        <li className="portfolio-item active">All</li>
        <li className="portfolio-item ">HTML</li>
        <li className="portfolio-item ">HTML</li>
        <li className="portfolio-item">Photoshop</li>
        <li className="portfolio-item">Wordpress</li>
        <li className="portfolio-item">Mobile</li>
      </ul>

          <div className="box">
            {images.map((image) => (
              <div key={image.id}>
                        <img src={image.image} alt="" />
                        <p className="overlay">
                          <span>Show Image</span>
                        </p>
                      </div>
            ))}
        
      </div>
    </div>
  );
}

export default Portfolio