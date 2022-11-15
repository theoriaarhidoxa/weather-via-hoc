import {IFetchingUrl, IObserved} from "./interfaces";

export const apiUrls: IFetchingUrl = {
    openMeteo: `https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}6&current_weather=true`,
    accuWeather: `https://dataservice.accuweather.com/currentconditions/v1/topcities/50?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}`
};

export const observedCities: IObserved = {
    Berlin: [52.5235, 13.4115],
    Paris: [48.8567, 2.3510],
    London: [51.5002, -0.1262],
    Madrid: [40.4167, -3.7033],
    Amsterdam: [52.3738, 4.8910],
    Tokyo: [35.6785, 139.6823],
    Moscow: [55.7558, 37.6176],
    Singapore: [1, 103.8500],
    Stockholm: [59.3328, 18.0645],
    Bogota: [4.6473, -74.0962]
};
