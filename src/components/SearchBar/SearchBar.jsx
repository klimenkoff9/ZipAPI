import React, { Component } from "react";
import axios from "axios";

import NewDiv from "../NewDiv/NewDiv.js"

class SearchBar extends Component {
  constructor() {
    super();
    this.state = { locations: [], zip: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const link = `http://ctp-zip-api.herokuapp.com/zip/${this.state.zip}`;
    try {
      let locations = await axios.get(link);
      this.setState({ locations: locations.data });
    } catch (error) {
      console.error(error);
    } finally {
        console.log(this.state.locations);
    }
    
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      zip: value
    });
    console.log(this.state.zip)
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="zip">Zip </label>
            <input
              name="zip"
              placeholder="Zip"
              value={this.state.zip}
              onChange={this.handleChange}
            />
            </div>
            <div>
              <button onClick={this.handleSubmit}>Submit</button>
            </div>
        </form>
        {this.state.locations.map((info) => {
          const {
            City,
            State,
            Lat,
            Long,
            EstimatedPopulation,
            TotalWages,
          } = info;
          console.log(info.City);
          return (
            <NewDiv
              city={info.City}
              state={info.State}
              locationLat={info.Lat}
              locationLot={info.Long}
              population={info.EstimatedPopulation}
              wages={info.TotalWages}
            />
          );
        })}
      </div>
    );
  }
}

export default SearchBar;
