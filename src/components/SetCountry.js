import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

class SetCountry extends Component {
    constructor (props) {
      super(props);
      this.state = { country: '', region: '' };
    }
  
    selectCountry (val) {
      this.setState({ country: val });
    }
  
    selectRegion (val) {
      this.setState({ region: val });
    }
  
    render () {
      const { country, region } = this.state;
      return (
        <div className="container search-box">
            <form onSubmit={this.props.getweather}>
                <CountryDropdown
                    value={country}
                    name="country"
                    onChange={(val) => this.selectCountry(val)} />
                <RegionDropdown
                    country={country}
                    value={region}
                    name="region"
                    onChange={(val) => this.selectRegion(val)} />
                <button type="submit">Get Weather</button>    
            </form>
        </div>
      );
    }
  }

export default SetCountry;  