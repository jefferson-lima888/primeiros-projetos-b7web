"use client";
import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const hour = new Date().getHours();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  //   const padZero = (value: number) => {
  //     return value.toString().padStart(2, "0");
  //   };

  //   const formatTime = (date: Date) => {
  //     const hours = date.getHours();
  //     const minutes = date.getMinutes();
  //     const seconds = date.getSeconds();

  //     return `${hours}:${padZero(minutes)}:${padZero(seconds)}`;
  //   };

  const fullTime = new Intl.DateTimeFormat("pt-BR", {
    timeStyle: "short",
    hour12: false,
  }).format(time);

  return (
    <div>
      <h1>Relógio</h1>
      {/* <p>{formatTime(time)}</p> */}
      <div className="text-9xl">{fullTime}</div>
      <div className="text-5xl font-bold flex justify-center">
        {/* uma forma de mostrar a frase */}
        {/* {greeting} */}

        {hour >= 0 && hour < 12 && "Bom dia 😁"}
        {hour >= 12 && hour < 18 && "Boa tarde 🤓"}
        {hour >= 18 && hour <= 23 && "Boa noite 😴"}
      </div>
    </div>
  );
};

export default Clock;
