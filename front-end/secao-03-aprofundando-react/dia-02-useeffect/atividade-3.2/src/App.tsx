import React, { useState, useEffect } from 'react';
import { fetchCoordinates } from './services';

type CoordinatesType = {
  latitude: number,
  longitude: number,
};
function App() {
  const [coordinates, setCoordinates] = useState<CoordinatesType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCoordinates();
      setCoordinates({ latitude: data.latitude, longitude: data.longitude });
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>International Space Station Location Tracker</h1>
      {coordinates && (
        <>
          <h1>{`Latitude: ${coordinates.latitude}`}</h1>
          <h1>{`Longitude: ${coordinates.longitude}`}</h1>
        </>
      )}
    </>
  );
}

export default App;
