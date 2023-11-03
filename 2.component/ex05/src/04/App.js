import React, { useState, useEffect } from "react";
import "./assets/scss/App.scss";
import Clock from "./Clock";

export default function App() {
  const [ticks, setTicks] = useState(0);
  const [now, setNow] = useState(new Date());

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  useEffect(() => {
    setInterval(() => {
      /* 시간 */
      setNow(new Date());

      setTicks((prevTicks) => prevTicks + 1);
    }, 1000);
  }, []);   // 의존성 배열
// 처음 render할 때 useEffect
  return (
    <>
      <Clock
        message={`ex04: ticks ${ticks}`}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </>
  );
}