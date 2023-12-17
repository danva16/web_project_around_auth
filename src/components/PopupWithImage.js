import React from "react";

function PopupWithImage(props) {
  const card = props.selectedCardElement;

  return (
    <div className={`popup ${card ? 'popup_mode_active' : ''}`}>
        <img className="popup__image" src={card ? card.link : ''} alt={card ? card.name : ''} />
        <h2 className="popup__title">{card ? card.name : ''}</h2>
        <button type="button" className="button button_action_close" onClick={props.onClose}></button>
      </div>
  )
}

export default PopupWithImage;