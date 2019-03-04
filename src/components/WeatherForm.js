import React, { Component } from 'react';

class WeatherForm extends Component {
    
    render() { 
        return ( 
            <div className="container search-box">
                <p>Search your perfect weather here...</p>
                <form onSubmit={this.props.getweather}>
                    <input type="text" name="country" placeholder="Type Your Country name..." />
                    <input type="text" name="city" placeholder="Type Your City name..." />
                    <button type="submit">Get Weather</button>
                </form>
            </div>
         );
    }
}
 
export default WeatherForm;