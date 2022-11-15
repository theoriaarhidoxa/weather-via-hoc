import React, {FC} from 'react';
import {withFetch} from "../hoc/withFetch";
import {ComponentProps, ICities} from "../interfaces";

const AccuWeather: FC<ComponentProps> = props => {
    return (
        <>
            {props.data.map((el: ICities, i: number) => {
                const {city, temperature} = el;
                return (
                    <tr key={city}>
                        <td>{i + 1}.</td>
                        <td>{city}</td>
                        <td>{temperature} C&deg;</td>
                    </tr>
                )
            })}
        </>
    );
};

export default withFetch(AccuWeather, 'accuWeather');
