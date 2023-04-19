import { useEffect, useState } from 'react';
import './App.css';
import { ComposableMap, Geographies, Geography, Graticule } from "react-simple-maps"
import { Marker } from "react-simple-maps"
import PopupCustom from './Popup/Popup';

function App() {
  // SVG to build the map
  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

  const [isOpenParis, setIsOpenParis] = useState(false);
  const [isOpenTouloulouse, setIsOpenToulouse] = useState(false);
  const [toulouseWeather, setToulouseWeather] = useState();
  const [parisWeather, setParisWeather] = useState();

  useEffect(() => {
    if (toulouseWeather) {
      setIsOpenToulouse(true);
    }
  }, [toulouseWeather]);

  useEffect(() => {
    if (parisWeather) {
      setIsOpenParis(true);
    }
  }, [parisWeather]);


  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-3, -48, -2],
        scale: 3000
      }}
      className='map'
    >
      <Graticule stroke="#EAEAEC" />
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#9998A3"
              stroke="#EAEAEC"
            />
          ))
        }
      </Geographies>
      <Marker className='marker' coordinates={[1.433333, 43.600000]} onClick={() => {
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=43.60000&lon=1.4333333&units=metric&appid=539a92a71fbb1b6ee46f8afdfc95bb2e')
          .then(response => response.json())
          .then(data => {
            setToulouseWeather(data);
          });
      }}>
        <circle r={6} fill="#F53" />
      </Marker>

      <Marker className='marker' coordinates={[2.333333, 48.866667]} onClick={() => {
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=48.866667&lon=2.333333&units=metric&appid=539a92a71fbb1b6ee46f8afdfc95bb2e')
          .then(response => response.json())
          .then(data => {
            setParisWeather(data);
          });
      }}>
        <circle r={6} fill="#F53" />
      </Marker>

      {toulouseWeather && (
        <PopupCustom isOpen={isOpenTouloulouse} setIsOpen={setIsOpenToulouse} weather={toulouseWeather} />
      )}

      {parisWeather && (
        <PopupCustom isOpen={isOpenParis} setIsOpen={setIsOpenParis} weather={parisWeather} />
      )}

    </ComposableMap>
  );
}

export default App;
