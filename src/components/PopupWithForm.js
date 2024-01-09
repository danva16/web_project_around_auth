import React from "react";

function PopupWithForm(props) {
  return (
    <form id={props.name} className={`form form_type_${props.name} ${props.isOpen && 'form_mode_active'}`} onSubmit={props.onSubmit} noValidate>
      <button type="button" className="button button_action_close" onClick={props.onClose}></button>
      <h2 className="form__title">{props.title}</h2>
      {props.children}
    </form>
  );
}

export default PopupWithForm;