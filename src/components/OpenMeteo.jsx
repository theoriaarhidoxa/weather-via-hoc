import React from 'react';
import {withFetch} from "../hoc/withFetch";

const OpenMeteo = ({data}) => {

    return (
        <>
            {data.map((el, i) => {
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

export default withFetch(OpenMeteo, 'openMeteo');
