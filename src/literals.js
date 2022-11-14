export const apiUrls = {
  openMeteo: `https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}6&current_weather=true`,
  accuWeather: `https://dataservice.accuweather.com/currentconditions/v1/topcities/50?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}`
};
