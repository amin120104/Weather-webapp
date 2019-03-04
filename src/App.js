import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import WeatherForm from './components/WeatherForm';
import Weather from './components/Weather';
import SetCountry from './components/SetCountry';

const API_KEY = "5a6850a6f54937604d9e14f3c00ac712";

class App extends Component {

  state = {
    temp: undefined,
    humidity: undefined,
    desc: undefined,
    windspeed: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();

    const country = e.target.elements.country.value;
    const region = e.target.elements.region.value;

    console.log(country);
    console.log(region);

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${region},${country}&mode=json&appid=${API_KEY}&units=metric`);

    const data = await api_call.json();
    console.log(data);
    if(data.cod === 200) {
      this.setState({
        temp: data.main.temp,
        humidity: data.main.humidity,
        desc: data.weather[0].description,
        windspeed: data.wind.speed,
        error: undefined
      })
    }
    else {
      this.setState({
        temp: undefined,
        humidity: undefined,
        desc: undefined,
        windspeed: undefined,
        error: "Your Weather is not found or you maybe not set your country and city"
      })
    }
  }

  render() {
    return (
      <div className="App">
          <Header />
          <SetCountry getweather={this.getWeather} />
          {/* <WeatherForm getweather={this.getWeather} /> */}
          <Weather 
            temp={this.state.temp}
            humidity={this.state.humidity}
            description={this.state.desc}
            windspeed={this.state.windspeed}
            error={this.state.error}
          />
          {console.log(this.state.error)}
      </div>
    );
  }
}

export default App;
