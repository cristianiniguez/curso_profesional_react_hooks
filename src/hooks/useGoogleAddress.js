import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const encodedAddress = encodeURIComponent(address);
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

  useEffect(async () => {
    const response = await axios.get(API);
    setMap(response.data.results[0]?.geometry.location);
  }, []);

  return map;
};

export default useGoogleAddress;
