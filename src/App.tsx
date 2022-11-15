import './App.scss';
import React from "react";
import AccuWeather from "./components/AccuWeather";
import OpenMeteo from "./components/OpenMeteo";

function App() {
    return (
        <div className='wrapper'>
            <p>Вывод температуры воздуха некоторых городов мира двумя различными Weather API (с использованием HOC).</p>
            <OpenMeteo/>
            <AccuWeather/>
        </div>
    );
}

export default App;
