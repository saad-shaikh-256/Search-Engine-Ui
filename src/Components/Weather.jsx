import React, { useState, useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = useState({
    temp: "Loading...",
    location: "Detecting...",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const success = (position) => {
      const { latitude: lat, longitude: lon } = position.coords;
      fetch(`https://wttr.in/${lat},${lon}?format=j1`)
        .then((res) => (res.ok ? res.json() : Promise.reject()))
        .then((data) => {
          setWeather({
            temp: `${data.current_condition[0].temp_C}°C`,
            location: data.nearest_area[0].areaName[0].value,
          });
        })
        .catch(() => {
          setError("Weather load failed.");
        });
    };

    const error = () => {
      setError("Location not available.");
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return (
    <div className="w-full h-fit flex flex-col items-end justify-center sm:absolute top-0 sm:px-9 sm:py-9">
      <div className="text-2xl sm:text-3xl font-bold">
        {error ? "--°C" : weather.temp}
      </div>
      <div className="text-base sm:text-lg font-semibold text-indigo-500">
        {error ? error : weather.location}
      </div>
    </div>
  );
};

export default Weather;
