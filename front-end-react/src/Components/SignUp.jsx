import React from 'react'
import './SignUp.css';
import image from "./photo/Image.jpg"
import { useNavigate } from 'react-router-dom';


function SignUp() {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/inscription");
  };
  return (
    <div className="signup">
      <img src={image} style={{ width: "80vw" }} alt="" />
      <div className='subscribe'>
        <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
        <p>SIGN UP NOW AND GET 75% OFF</p>
        <button  onClick={routeChange}>SIGN UP NOW</button>
      </div>
    </div>
  );
}

export default SignUp