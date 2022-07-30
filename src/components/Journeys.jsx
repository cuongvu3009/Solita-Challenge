import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Journeys = () => {
  const [journeys, setJourneys] = useState([]);

  useEffect(() => {
    const getJourneys = async () => {
      try {
        const res = await axios.get('/journeys');
        setJourneys(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getJourneys();
  }, []);

  return <div>Journeys</div>;
};

export default Journeys;
