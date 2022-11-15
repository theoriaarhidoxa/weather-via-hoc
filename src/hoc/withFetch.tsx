import React, {useEffect, useState} from "react";
import {apiUrls} from "../literals";
import {ICities} from "../interfaces";
import {observedCities} from '../literals';

export const withFetch = (Component: React.ElementType, apiName: string) => {

    return function () {
        const [data, setData] = useState<ICities[]>([]);
        const [query, setQuery] = useState('');

        const fetchWeather = async () => {
            if (apiName === 'openMeteo') {
                const promises = [];
                for (const key in observedCities) {
                    const [latitude, longitude] = observedCities[key];
                    const p = fetch(apiUrls[apiName].replace('{latitude}', latitude.toString()).replace('{longitude}', longitude.toString())).then(pr => pr.json());
                    promises.push(p);
                }
                const json = await Promise.all(promises);
                const data = json.map((el): ICities => {
                    const city = Object.keys(observedCities).find(name => observedCities[name][0].toFixed(1) === el.latitude.toFixed(1)) || '';
                    return {city, temperature: el['current_weather']['temperature']};
                });
                setData(data);
            } else {
                const response2 = await fetch(apiUrls[apiName] + '');
                const json = await response2.json();
                const data2 = json.filter((el: any) => Object.keys(observedCities).includes(el['LocalizedName']))
                    .map((el: any): ICities => {
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
                <Component data={data.sort((a, b) => a.city.localeCompare(b.city))
                    .filter(el => el.city.toLowerCase().startsWith(query.toLowerCase()))}/>
                </tbody>
            </table>
        )
    }
};
