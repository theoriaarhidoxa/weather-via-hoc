import React, {useEffect, useState} from "react";
import {apiUrls} from "../literals";

export const withFetch = (Component, apiName) => {

    return function () {
        const [data, setData] = useState([]);
        const [query, setQuery] = useState('');
        const observedCities = {
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

        const fetchWeather = async () => {
            if (apiName === 'openMeteo') {
                const promises = [];
                for (const key in observedCities) {
                    const [latitude, longitude] = observedCities[key];
                    const p = fetch(apiUrls[apiName].replace('{latitude}', latitude).replace('{longitude}', longitude)).then(pr => pr.json());
                    promises.push(p);
                }
                const json = await Promise.all(promises);
                const data = json.map(el => {
                    const city = Object.keys(observedCities).find(name => observedCities[name][0].toFixed(1) === el.latitude.toFixed(1));
                    return {city, temperature: el['current_weather']['temperature']};
                });
                setData(data);
            } else {
                const response2 = await fetch(apiUrls[apiName]);
                const json = await response2.json();
                const data2 = json.filter(el => Object.keys(observedCities).includes(el['LocalizedName'])).map(el => {
                    return ({city: el['LocalizedName'], temperature: el['Temperature']['Metric']['Value']});
                });
                setData(data2);
            }
        };

        useEffect(() => {
            fetchWeather().then().catch().finally();
        }, []);

        return (
            <table className={data.length === 0 ? 'wrapper__table blurred alignedTop' : query ? 'wrapper__table alignedTop' : 'wrapper__table'}>
                <caption>{apiName}</caption>
                <tbody>
                <tr>
                    <td colSpan={3}><input type='search' value={query} placeholder='Filter...'
                                           onChange={e => setQuery(e.target.value)}/></td>
                </tr>
                <Component
                           data={data.sort((a, b) => a.city.localeCompare(b.city)).filter(el => el.city.toLowerCase().startsWith(query.toLowerCase()))}/>
                </tbody>
            </table>
        )
    }
};
