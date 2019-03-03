import React, { Component } from 'react';

class WeatherForm extends Component {
    
    render() { 
        return ( 
            <div className="container">
                <form onSubmit={this.props.getweather}>
                    <input type="text" name="city" placeholder="city---" />
                    <input type="text" name="country" placeholder="country---" />
                    <button type="submit">Get Weather</button>
                </form>
            </div>
         );
    }
}
 
export default WeatherForm;