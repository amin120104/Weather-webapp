import React, { Component } from 'react';

class Weather extends Component {
    
    render() { 
        return ( 
            <div className="container weather-result">

                {this.props.temp ? (<p>Current Temperature: <span>{this.props.temp}</span></p>) : null}
                {this.props.temp ? (<p>Current humidity: <span>{this.props.humidity}</span></p>) : null}
                {this.props.temp ? (<p>Description: <span>{this.props.description}</span></p>) : null}
                {this.props.temp ? (<p>Current wind speed: <span>{this.props.windspeed} km/h</span></p>) : null}
                {this.props.error ? (<p>Sorry: {this.props.error}</p>) : null}

            </div>
         );
    }
}
 
export default Weather;