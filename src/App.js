import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [rainArr, setRains] = useState([]);

  useEffect(() => {
    const createCircle = () => {
      const top = Math.random() * window.innerHeight + "px";
      const left = Math.random() * window.innerWidth + "px";
      const rain = (
        <div
          className="circle"
          style={{
            top: top,
            left: left
          }}
          key={parseInt(Date.now() * Math.random(), 10)}
        ></div>
      );

      if (rainArr.length >= 9) {
        let newRainArr = rainArr.slice(1);
        setRains([...newRainArr, rain]);
      } else {
        setRains([...rainArr, rain]);
      }
    };

    let timeout = setTimeout(createCircle, 300);
    return () => clearTimeout(timeout);
  }, [rainArr]);

  return <div className="App">{rainArr}</div>;
}
