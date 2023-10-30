import { useState, useEffect } from 'react'
import { fetchCoordenates } from './Services'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

type Coordenates = {
  latitude: number,
  longitude: number,
}

function App() {
  const [coordenates, setCoordenates] = useState<Coordenates | null>(null);
  const [loading, setLoading] = useState(true); // sempre q for true, vai renderizar a mensagem "loading..."

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCoordenates();
      setCoordenates({ latitude: data.latitude, longitude: data.longitude })
      setLoading(false);
    }
    fetchData();
    
    const intervalId = setInterval(() => {
      fetchData();
    }, 3000);

    return () => { // Essa é a função cleanup
      clearInterval(intervalId);
    };
  }, []);

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>International Space Station Location Tracker</h1>
      {coordenates && (
        <>
          <h2>{`Latitude:${coordenates.latitude}`}</h2>
          <h2>{`Longitude:${coordenates.longitude}`}</h2>
        </>
      )}

    </>
  )
}

export default App
