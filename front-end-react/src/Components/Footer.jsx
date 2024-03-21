import React from "react";
import { BsCCircle } from "react-icons/bs";
import "./Footer.css";
function Footer() {
  return (
    <div className="Basdelapage">
      <div className="contact">
        <div>
          <h6 className="titre1">INFORMATION</h6>
          <br />
          <p className="soratrakeli">
            The brand
            <br />
            Local Stores <br />
            Customer Service <br />
            Privacy & cookies <br />
            Site Map
          </p>
        </div>
        <div>
          <h6 className="titre1">MY PROFILE</h6> <br />
          <p className="soratrakeli">
            Getting Started <br />
            FAQS <br />
            Buying Guide <br />
            Order Returns <br />
            Affiliate Program
          </p>
        </div>
        <div>
          <h6 className="titre1">YOUR ACCOUNT</h6> <br />
          <p className="soratrakeli">
            Shipping & retunrs <br />
            Secure Shopping <br />
            Testimonials <br />
            Award Winnig <br />
            Ethical Trading
          </p>
        </div>
        <div>
          <h6 className="titre1"> LOOKBOOK</h6> <br />
          <p className="soratrakeli">
            Getting Started <br /> FAQS <br /> Buying Guide <br />
            Order Returns <br />
            Affiliate Program
          </p>
        </div>
        <div>
          <h6 className="titre1">CONTACT DETAILS</h6>
          <div className="soratrakeli">
            <p className="detail">Telephone:0123-456-789 FAQS <br />
            Email:
            free@psdfreebles.com <br />
            Head Office:245 Yellow House. <br /> Main Street
            ,London 456789 </p>
          </div>
        </div>
      </div>
      <div className="signature">
        <div className="copy">
          <BsCCircle />
          <p>Copyright e-commerce 1.0. 2022 Designed by Psdfreebles.com</p>
        </div>
        <div>
          <h2 className="fashion">Fashion</h2>
          <p className="fashiontag">TAGLINE HERE</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
