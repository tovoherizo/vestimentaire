

import React from 'react'
import './Carousel.css';
import shape from "./photo/carousel/Shape.jpg";
import women from "./photo/carousel/women.jpg"
import kids from "./photo/carousel/kids.jpg";
import { useNavigate } from 'react-router-dom';


function Carousel() {
  const navigate = useNavigate();
  const Men= () => {
    navigate("/Men");
  };
  return (
    <div>
      <div className="type">
        <h1>PRODUCT TYPES</h1>
        <p className="up">up to 30% discount</p>
      </div>

      <div className="Card">
        <div className="cardProduit">
          <div className="image">
            <img src={shape} alt="shape" style={{ width: "20vw" }} />
          </div>
          <button className="btn" onClick={Men}>
            Show more
          </button>
        </div>
        <div className="cardProduit">
          <div className="image">
            <img src={women} alt="" style={{ width: "20vw" }} />
          </div>
          <button className="btn">Show more</button>
        </div>
        <div className="cardProduit">
          <div className="image">
            <img src={kids} alt="" style={{ width: "20vw" }} />
          </div>
          <button className="btn">Show more</button>
        </div>
      </div>
    </div>
  );
}

export default Carousel
