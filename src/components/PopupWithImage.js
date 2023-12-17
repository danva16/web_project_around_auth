import React from "react";

function PopupWithImage() {
  return (
    <div className="popup">
        <img className="popup__image" src="#" alt="Coloca el URL de la imagen que deseas agregar" />
        <h2 className="popup__title">Lugar</h2>
        <button type="button" className="button button_action_close"></button>
      </div>
  )
}

export default PopupWithImage;