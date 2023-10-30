export const fetchCoordenates = async () => {
  const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');

  if(!response.ok) {
    throw new Error(`Failed to fetch coordenates`);
  }

  const coordenates = await response.json();

  const latitude = Number(coordenates.latitude.toFixed(4));
  const longitude = Number(coordenates.longitude.toFixed(4));

  return { latitude, longitude }
  
};