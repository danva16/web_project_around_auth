import React from "react";

function PopupWithForm(props) {
  return (
    <fieldset id={props.name} className={`form__set form__set_type_${props.name} ${props.isOpen && 'form__set_mode_active'}`}>
      <button type="button" className="button button_action_close" onClick={props.onClose}></button>
      <h2 className="form__title">{props.title}</h2>
      {props.children}
    </fieldset>
  );
}

export default PopupWithForm;