import React, { Component } from "react";
import axios from "axios";

class Canine extends Component {
  constructor() {
    super();
    this.state = {
      breeds: [],
    };
  }

  async apiCall() {
    const dogURL = "https://dog.ceo/api/breeds/list/all";
    const response = await axios.get(dogURL);
    const dogBreeds = Object.keys(response.data.message);
    this.setState({ breeds: dogBreeds });
  }

  componentDidMount() {
    this.apiCall();
  }

  render() {
    const { breeds } = this.state;
    return (
      <ul>
        {breeds.map((breed, index) => (
          <li key={index}>{breed}</li>
        ))}
      </ul>
    );
  }
}

export default Canine;
