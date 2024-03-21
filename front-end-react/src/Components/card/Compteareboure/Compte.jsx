import React, { useEffect, useState } from 'react'

function Compte() {
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
    <div>
      <h1>Countdown</h1>
      <h2>Time Remaining:</h2>
      <div>
        {days > 0 && <span>{days} days </span>}
        <span>{hours < 10 ? `0${hours}` : hours}:</span>
        <span>{minutes < 10 ? `0${minutes}` : minutes}:</span>
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
    </div>
  );
}

export default Compte