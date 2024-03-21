import React, { useEffect, useState } from "react";
import "./Card.css";
import fille from "../photo/sectioon1/fille.jpg";

function Card() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timeout if the component is unmounted or timeLeft is 0
    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;
  return (
    <div className="cardsary">
      <div className="saryfille">
        <img
          src={fille}
          alt="fille"
          style={{ height: "40vh", width: "20vh" }}
        />
      </div>
      <div className="card" style={{ width: "20rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            SPECIAL OFFER <br />
            OF THE MONTH
          </h5>
          <p className="card-text">Black long sleeve</p>
          <div className="prix">
            <p className="vidiny1" style={{ textDecoration: "line-through" }}>
              $105
            </p>{" "}
            <p className="vidiny2">$65</p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className="date">
          <div className="temp">
            <h4>{hours < 10 ? `0${hours}` : hours}:</h4> <br />
            <p>HOURS</p>
          </div>
          <div className="temp">
            <h4> {minutes < 10 ? `0${minutes}` : minutes}:</h4>
            <br />
            <p>MINUTES</p>
          </div>
          <div className="temp">
            <h4> {seconds < 10 ? `0${seconds}` : seconds}</h4>
            <br />
            <p>SECONDS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
