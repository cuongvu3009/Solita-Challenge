import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Stations = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    const getStations = async () => {
      try {
        const res = await axios.get('/stations');
        setStations(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getStations();
  }, []);

  return <div>Stations</div>;
};

export default Stations;
