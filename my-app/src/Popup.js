import React from 'react';
import './App.css';
import ReactModal from 'react-modal';

const PopupCustom = ({ setIsOpen, isOpen, weather }) => {
    return (
        <ReactModal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
        >
          <div className='containerTemp'>
            <h4>Température des derniers jours :</h4>
            <div>
              Aujourd'hui: {weather.daily[0].temp.day}
            </div>
            <div>
              Hier : {weather.daily[1].temp.day}
            </div>
            <div>
              Avant hier: {weather.daily[2].temp.day}
            </div>
          </div>
        </ReactModal>
    );
}
export default PopupCustom;
