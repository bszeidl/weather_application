/*import { useState, useEffect } from "react";

export const useFetch = (initUrl) => {
  const [url, setUrl] = useState(initUrl);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status !== 200) return "There must be a problem";
        return response.json();
      })
      .then((json) => setData(json));
  }, [url]);

  return [data, setUrl];
};

export const useWeather = (city = "London") => {
  const [weather, setUrl] = useFetch(
    `https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=7cf1f1b47542d9ecccf08ca82e87ec23`
  );
  useEffect(() => {
    setUrl(
      `https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=7cf1f1b47542d9ecccf08ca82e87ec23`
    );
  }, [city]);
  return weather === undefined ? "Loading..." : weather;
};
*/