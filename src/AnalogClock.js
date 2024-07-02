import React, { useEffect, useState } from "react";
import "./AnalogClock.css";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondHandStyle = {
    transform: `rotate(${seconds * 6}deg)`,
  };

  const minuteHandStyle = {
    transform: `rotate(${minutes * 6}deg)`,
  };

  const hourHandStyle = {
    transform: `rotate(${hours * 30 + minutes / 2}deg)`,
  };

  return (
    <div className="clock">
      <div className="clock-face">
        <div className="hand hour-hand" style={hourHandStyle}></div>
        <div className="hand minute-hand" style={minuteHandStyle}></div>
        <div className="hand second-hand" style={secondHandStyle}></div>
      </div>
    </div>
  );
};

export default AnalogClock;
