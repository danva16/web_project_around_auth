import React from "react";

function Popup() {
  return (
    <>
    <div className="popup">
      <img className="popup__image" src="#" alt="Coloca el URL de la imagen que deseas agregar" />
      <h2 className="popup__title">Lugar</h2>
      <button type="button" className="button button_action_close"></button>
    </div>

    <div id="confirmation" className="popup popup_type_confirmation">
      <h2 className="popup__title popup__title_type_confirmation">¿Estás seguro?</h2>
      <button type="button" className="button button_action_create">Sí</button>
      <button type="button" className="button button_action_close"></button>
    </div>
    </>
  );
}

export default Popup;