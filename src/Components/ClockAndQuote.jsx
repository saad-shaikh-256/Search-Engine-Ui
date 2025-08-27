import React, { useState, useEffect } from "react";

const quotes = [
  "Stay wild, moon child.",
  "Dream big, work hard.",
  "Create your own path.",
  "Less talk, more action.",
  "Be here now.",
  "Live, love, laugh.",
  "Do it with passion.",
  "Make your own magic.",
  "Be fearless in life.",
  "Chase the impossible.",
  "Start where you are.",
  "Enjoy the little things.",
  "Feel the fear, do it.",
  "Let it be.",
  "Choose joy today.",
  "Believe in your dreams.",
  "Live for the moment.",
  "Make it count.",
  "Work hard, stay humble.",
  "Be the change.",
  "Seek the unknown.",
  "Never stop dreaming.",
  "Stay curious, stay kind.",
  "Keep moving forward.",
  "Turn dreams into reality.",
  "Laugh more, stress less.",
  "Follow your own path.",
  "Dare to be different.",
  "You are enough.",
  "Start today, not tomorrow.",
  "Success is the journey.",
  "Make today amazing.",
  "Don’t stop believing.",
  "Live without regrets.",
  "The best is yet to come.",
  "Embrace the chaos.",
  "Be a light.",
  "Take the risk.",
  "Dream it, do it.",
  "Stay true to yourself.",
  "Create your own sunshine.",
  "Take it one step.",
  "Every moment counts.",
  "Learn from yesterday.",
  "Stay humble, hustle hard.",
  "Life begins at the end.",
  "Be brave, be bold.",
  "Happiness is a choice.",
];

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

const ClockAndQuote = () => {
  const [time, setTime] = useState(new Date());

  const [quote, setQuote] = useState(getRandomQuote());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="h-fit w-full flex flex-col justify-center items-center gap-2 text-center font-afacad">
      <div className="w-full h-fit text-5xl sm:text-6xl font-bold">
        {formatTime(time)}
      </div>
      <div className="w-full h-fit text-2xl sm:text-3xl font-bold text-indigo-500">
        {quote}
      </div>
    </div>
  );
};

export default ClockAndQuote;
