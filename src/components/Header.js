import React, { Component } from 'react';

class Header extends Component {
    
    render() { 
        return ( 
            <div className="container weather-header">
                <h1>My Weather</h1>
                <p>Search your perfect weather here...</p>
            </div>
         );
    }
}
 
export default Header;