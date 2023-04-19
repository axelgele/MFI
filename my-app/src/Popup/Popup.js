import React from 'react';
import '../App.css';
import './Popup.css';
import ReactModal from 'react-modal';
import logo from './weather.png'; // Tell Webpack this JS file uses this image

const PopupCustom = ({ setIsOpen, isOpen, weather }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
    >
      <div className='containerTemp'>
        <h4>Température des derniers jours :</h4>

        <div className='container-temp'>
          <div className='today'>
            <p className='label'>Aujourd'hui:</p>
            <p className='temp-today'>{weather.daily[0].temp.day}°C </p>
            <div className='container-weather'>
            <img src={logo} alt="Logo" />
            <p className='weather'>{weather.daily[0].weather[0].main}</p>
            </div>
          </div>

          <div className='previous-days'>
            <div>
              <p className='other-day'> Hier : {weather.daily[1].temp.day}°C </p>
            </div>
            <div >
              <p className='other-day'>Avant hier:{weather.daily[2].temp.day}°C</p>
            </div>
          </div>
        </div>

      </div>
    </ReactModal>
  );
}
export default PopupCustom;
