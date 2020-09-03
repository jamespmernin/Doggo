import React, { useEffect, useState } from "react";
import axios from "axios";

const Dog = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    async function apiCall() {
      const dogURL = "https://dog.ceo/api/breeds/list/all";
      const response = await axios.get(dogURL);
      const dogBreeds = Object.keys(response.data.message);
      setBreeds(dogBreeds);
    }
    apiCall();
  }, []);

  return (
    <ul>
      {breeds.map((breed, index) => (
        <li key={index}>{breed}</li>
      ))}
    </ul>
  );
};

export default Dog;

// state to store breed names
// effect to make API call
// map through breeds in return
