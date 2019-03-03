import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import WeatherForm from './components/WeatherForm';
import Weather from './components/Weather';

const API_KEY = "5a6850a6f54937604d9e14f3c00ac712";

class App extends Component {

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&mode=json&appid=${API_KEY}&units=metric`);

    const data = await api_call.json();
    console.log(data);
    console.log(city);
    console.log(country);
  }

  render() {
    return (
      <div className="App">
          <Header />
          <WeatherForm getweather={this.getWeather} />
          <Weather />
      </div>
    );
  }
}

export default App;
