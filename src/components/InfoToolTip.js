import React from "react";

function InfoToolTip(props) {
  return (
    <div className={`modal ${props.isOpen && 'modal_type_opened'}`}>
      <button className="button_action_close" onClick={props.onClose}></button>
      <div className="modal__container">
        <img src={props.image} alt="ícono de ventana modal" className="modal__image" />
        <p className="modal__text">{props.text}</p>
      </div>
    </div>
  )
}

export default InfoToolTip;
